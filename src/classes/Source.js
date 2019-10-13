import jsfeat from 'jsfeat';
import Match from '@/classes/Match';
import { addGaussianBlur, detectCorners } from '@/utils/jsfeat/base';

const blur = 5;
const maxCorners = 300;
let homo3x3 = new jsfeat.matrix_t(3, 3, jsfeat.F32C1_t);
let match_mask = new jsfeat.matrix_t(500, 1, jsfeat.U8C1_t);

export default class Pattern {
  constructor() {
    this.matrix = null;
    this.corners = [];
    this.cornersCount = [];
    this.descriptor = [];
    this.matches = [];
  }

  setup (dimension) {
    this.matrix = new jsfeat.matrix_t(dimension.width, dimension.height, jsfeat.U8_t | jsfeat.C1_t);
    this.descriptor = prepareResults(this.matrix, this.corners, this.matches);
  }

  detect (imageData, pattern) {
    jsfeat.imgproc.grayscale(imageData.data, imageData.width, imageData.height, this.matrix);
    addGaussianBlur(this.matrix, blur);
    const num = detectCorners(this.matrix, this.corners, this.descriptor, maxCorners);
    const numMatches = matchPattern(this.descriptor, pattern.descriptors, pattern.descriptors.length, this.matches, 48);
    const numGoodMatches = find_transform(this.matches, numMatches, this.corners, pattern.corners);

    let shape = [];
    if (numGoodMatches > 8) {
      // what is the right dimension?
      // https://github.com/inspirit/jsfeat/blob/gh-pages/sample_orb.html#L507
      shape = tCorners(homo3x3.data, pattern.matrix.rows, pattern.matrix.cols);
    }

    // console.log(numMatches);

    return {
      matrix: this.matrix,
      corners: {
        list: this.corners,
        count: num
      },
      shape: shape
    };
  }
}

function prepareResults (imgMatrix, corners, matches) {
  let i = (imgMatrix.cols | 0) * (imgMatrix.rows | 0);
  while (--i >= 0) {
    corners[Number(i)] = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
    matches[Number(i)] = new Match();
  }
  return new jsfeat.matrix_t(32, 500, jsfeat.U8_t | jsfeat.C1_t);
}

function matchPattern (screen_descriptors, pattern_descriptors, num_train_levels = 4, matches, threshold = null) {
  var q_cnt = screen_descriptors.rows;
  var query_u32 = screen_descriptors.buffer.i32; // cast to integer buffer
  var qd_off = 0;
  var qidx = 0, lev = 0, pidx = 0, k = 0;
  var num_matches = 0;
  for (qidx = 0; qidx < q_cnt; ++qidx) {
    var best_dist = 256;
    var best_dist2 = 256;
    var best_idx = -1;
    var best_lev = -1;
    for (lev = 0; lev < num_train_levels; ++lev) {
      var lev_descr = pattern_descriptors[Number(lev)];
      var ld_cnt = lev_descr.rows;
      var ld_i32 = lev_descr.buffer.i32; // cast to integer buffer
      var ld_off = 0;
      for (pidx = 0; pidx < ld_cnt; ++pidx) {
        var curr_d = 0;
        // our descriptor is 32 bytes so we have 8 Integers
        for (k = 0; k < 8; ++k) {
          curr_d += popcnt32(query_u32[qd_off + k] ^ ld_i32[ld_off + k]);
        }
        if (curr_d < best_dist) {
          best_dist2 = best_dist;
          best_dist = curr_d;
          best_lev = lev;
          best_idx = pidx;
        } else if (curr_d < best_dist2) {
          best_dist2 = curr_d;
        }
        ld_off += 8; // next descriptor
      }
    }
    // filter out by some threshold
    if (threshold) {
      if (best_dist < threshold) {
        matches[Number(num_matches)].screen_idx = qidx;
        matches[Number(num_matches)].pattern_lev = best_lev;
        matches[Number(num_matches)].pattern_idx = best_idx;
        num_matches++;
      }
    } else {
      /* filter using the ratio between 2 closest matches*/
      if (best_dist < 0.8 * best_dist2) {
        matches[Number(num_matches)].screen_idx = qidx;
        matches[Number(num_matches)].pattern_lev = best_lev;
        matches[Number(num_matches)].pattern_idx = best_idx;
        num_matches++;
      }
    }

    qd_off += 8; // next query descriptor
  }
  return num_matches;
}

function popcnt32 (n) {
  n -= ((n >> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
  return (((n + (n >> 4)) & 0xF0F0F0F) * 0x1010101) >> 24;
}

// var match_t = (function () {
//   function match_t (screen_idx, pattern_lev, pattern_idx, distance) {
//     if (typeof screen_idx === 'undefined') { screen_idx = 0; }
//     if (typeof pattern_lev === 'undefined') { pattern_lev = 0; }
//     if (typeof pattern_idx === 'undefined') { pattern_idx = 0; }
//     if (typeof distance === 'undefined') { distance = 0; }
//     this.screen_idx = screen_idx;
//     this.pattern_lev = pattern_lev;
//     this.pattern_idx = pattern_idx;
//     this.distance = distance;
//   }
//   return match_t;
// })();

function find_transform (matches, count, screen_corners, pattern_corners) {
  // motion kernel
  var mm_kernel = new jsfeat.motion_model.homography2d();
  // ransac params
  var num_model_points = 4;
  var reproj_threshold = 3;
  var ransac_param = new jsfeat.ransac_params_t(num_model_points,
    reproj_threshold, 0.5, 0.99);
  var pattern_xy = [];
  var screen_xy = [];
  // construct correspondences
  for (var i = 0; i < count; ++i) {
    var m = matches[Number(i)];
    var s_kp = screen_corners[m.screen_idx];
    var p_kp = pattern_corners[m.pattern_lev][m.pattern_idx];
    pattern_xy[Number(i)] = { 'x': p_kp.x, 'y': p_kp.y };
    screen_xy[Number(i)] = { 'x': s_kp.x, 'y': s_kp.y };
  }
  // estimate motion
  var ok = false;
  ok = jsfeat.motion_estimator.ransac(ransac_param, mm_kernel,
    pattern_xy, screen_xy, count, homo3x3, match_mask, 1000);
  // extract good matches and re-estimate
  var good_cnt = 0;
  if (ok) {
    for (var j = 0; j < count; ++j) {
      if (match_mask.data[Number(j)]) {
        pattern_xy[Number(good_cnt)].x = pattern_xy[Number(j)].x;
        pattern_xy[Number(good_cnt)].y = pattern_xy[Number(j)].y;
        screen_xy[Number(good_cnt)].x = screen_xy[Number(j)].x;
        screen_xy[Number(good_cnt)].y = screen_xy[Number(j)].y;
        good_cnt++;
      }
    }
    // run kernel directly with inliers only
    mm_kernel.run(pattern_xy, screen_xy, homo3x3, good_cnt);
  } else {
    jsfeat.matmath.identity_3x3(homo3x3, 1.0);
  }
  return good_cnt;
}

function tCorners (M, w, h) {
  var pt = [
    { 'x': 0, 'y': 0 }, { 'x': w, 'y': 0 }, { 'x': w, 'y': h }, { 'x': 0, 'y': h }
  ];
  var z = 0.0, i = 0, px = 0.0, py = 0.0;
  for (; i < 4; ++i) {
    px = M[0] * pt[Number(i)].x + M[1] * pt[Number(i)].y + M[2];
    py = M[3] * pt[Number(i)].x + M[4] * pt[Number(i)].y + M[5];
    z = M[6] * pt[Number(i)].x + M[7] * pt[Number(i)].y + M[8];
    pt[Number(i)].x = px / z;
    pt[Number(i)].y = py / z;
  }
  return pt;
}
