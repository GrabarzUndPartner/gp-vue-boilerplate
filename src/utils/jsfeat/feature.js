import jsfeat from 'jsfeat';

const u_max = new Int32Array([
  15, 15, 15, 15, 14, 14, 14, 13, 13, 12, 11, 10, 9, 8, 6, 3, 0
]);
let homo3x3 = new jsfeat.matrix_t(3, 3, jsfeat.F32C1_t);
let match_mask = new jsfeat.matrix_t(500, 1, jsfeat.U8C1_t);

export function detectKeypoints (img, corners, max_allowed) {
  // detect features
  let count = jsfeat.fast_corners.detect(img, corners, 3);
  // sort by score and reduce the count if needed
  if (count > max_allowed) {
    jsfeat.math.qsort(corners, 0, count - 1, function (a, b) { return (b.score < a.score); });
    count = max_allowed;
  }
  // calculate dominant orientation for each keypoint
  for (let i = 0; i < count; ++i) {
    corners[Number(i)].angle = ic_angle(img, corners[Number(i)].x, corners[Number(i)].y);
  }
  return count;
}

export function match (screen_descriptors, pattern_descriptors, num_train_levels = 4, matches, threshold = null) {
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

function ic_angle (img, px, py) {
  const half_k = 15; // half patch size
  const src = img.data, step = img.cols, center_off = (py * step + px) | 0;
  let m_01 = 0, m_10 = 0, u = 0, v = 0, v_sum = 0, d = 0, val_plus = 0, val_minus = 0;
  // Treat the center line differently, v=0
  for (u = -half_k; u <= half_k; ++u)
    m_10 += u * src[center_off + u];
  // Go line by line in the circular patch
  for (v = 1; v <= half_k; ++v) {
    // Proceed over the two lines
    v_sum = 0;
    d = u_max[Number(v)];
    for (u = -d; u <= d; ++u) {
      val_plus = src[center_off + u + v * step];
      val_minus = src[center_off + u - v * step];
      v_sum += (val_plus - val_minus);
      m_10 += u * (val_plus + val_minus);
    }
    m_01 += v * v_sum;
  }
  return Math.atan2(m_01, m_10);
}

function popcnt32 (n) {
  n -= ((n >> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
  return (((n + (n >> 4)) & 0xF0F0F0F) * 0x1010101) >> 24;
}

export function find_transform (matches, count, screen_corners, pattern_corners) {
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

export function tCorners (w, h) {
  var pt = [
    { 'x': 0, 'y': 0 }, { 'x': w, 'y': 0 }, { 'x': w, 'y': h }, { 'x': 0, 'y': h }
  ];
  var z = 0.0, i = 0, px = 0.0, py = 0.0;
  for (; i < 4; ++i) {
    px = homo3x3.data[0] * pt[Number(i)].x + homo3x3.data[1] * pt[Number(i)].y + homo3x3.data[2];
    py = homo3x3.data[3] * pt[Number(i)].x + homo3x3.data[4] * pt[Number(i)].y + homo3x3.data[5];
    z = homo3x3.data[6] * pt[Number(i)].x + homo3x3.data[7] * pt[Number(i)].y + homo3x3.data[8];
    pt[Number(i)].x = px / z;
    pt[Number(i)].y = py / z;
  }
  return pt;
}
