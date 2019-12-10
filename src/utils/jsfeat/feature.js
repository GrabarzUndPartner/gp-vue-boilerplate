import jsfeat from 'jsfeat';
import WorkerPool from '@/classes/parallel/WorkerPool';

const u_max = new Int32Array([
  15, 15, 15, 15, 14, 14, 14, 13, 13, 12, 11, 10, 9, 8, 6, 3, 0
]);
let homo3x3 = new jsfeat.matrix_t(3, 3, jsfeat.F32C1_t);
let match_mask = new jsfeat.matrix_t(500, 1, jsfeat.U8C1_t);
const workerPool = new WorkerPool();

export function detectKeypoints (img, corners, max_allowed, comp) {
  // detect features
  let count = jsfeat.yape06.detect(img, corners, 3);
  // let count = jsfeat.fast_corners.detect(img, corners, 5);
  // sort by score and reduce the count if needed
  if (count > max_allowed) {
    jsfeat.math.qsort(corners, 0, count - 1, comp || function (a, b) { return (b.score < a.score); });
    count = max_allowed;
  }
  // calculate dominant orientation for each keypoint
  for (let i = 0; i < count; ++i) {
    corners[Number(i)].angle = ic_angle(img, corners[Number(i)].x, corners[Number(i)].y);
  }
  return count;
}
export function matchCorners (screen_descriptors, pattern_descriptors, threshold = null) {
  // console.log(pattern_descriptors);
  var q_cnt = screen_descriptors.rows;
  var matches = [];

  const steps = Math.ceil(q_cnt / 2);
  for (let step = 0; step < q_cnt; step += steps) {
    let stop = Math.min(step + steps, q_cnt);
    matches.push(splitMatchCorners(screen_descriptors, pattern_descriptors, threshold, step, stop));
  }

  return Promise.all(matches)
    .then((values) => {
      return values.flat();
    });
}

function splitMatchCorners (screen_descriptors, pattern_descriptors, threshold, start, stop) {
  const worker = workerPool.getInstance('match');

  const matches = worker.then((worker) => {
    let promise = new Promise((resolve) => {
      worker.resolve = resolve;
    });

    const query_u32 = screen_descriptors.buffer.i32;
    pattern_descriptors = pattern_descriptors.map(({ rows, buffer: { i32 } }) => ({ rows, buffer: { i32 } }));
    worker.postMessage({ query_u32, pattern_descriptors, threshold, start, stop });
    return promise;
  }).catch((e) => {
    console.error(e);
  });

  return matches;
}

export function subMatchCorners (imageData, pattern_descriptors) {
  const worker = workerPool.getInstance('submatch');

  const matches = worker.then((worker) => {
    let promise = new Promise((resolve) => {
      worker.resolve = resolve;
    });

    pattern_descriptors = pattern_descriptors.map(({ rows, buffer: { i32 } }) => ({ rows, buffer: { i32 } }));
    worker.postMessage({ imageData, pattern_descriptors });
    return promise;
  }).catch((e) => {
    console.error(e);
  });

  return matches;
}

export function matchCorner (screen_descriptors, pattern_descriptors, threshold = null, qidx) {
  var query_u32 = screen_descriptors.buffer.i32; // cast to integer buffer
  var lev = 0, pidx = 0, k = 0;

  var best_dist = 256;
  var best_dist2 = 256;
  var best_idx = -1;
  var best_lev = -1;
  for (lev = 0; lev < pattern_descriptors.length; ++lev) {
    var lev_descr = pattern_descriptors[Number(lev)];
    var ld_cnt = lev_descr.rows;
    var ld_i32 = lev_descr.buffer.i32; // cast to integer buffer
    var ld_off = 0;
    for (pidx = 0; pidx < ld_cnt; ++pidx) {
      var curr_d = 0;
      // our descriptor is 32 bytes so we have 8 Integers
      for (k = 0; k < 8; ++k) {
        curr_d += popcnt32(query_u32[(qidx * 8) + k] ^ ld_i32[ld_off + k]);
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
      return {
        screen_idx: qidx,
        pattern_lev: best_lev,
        pattern_idx: best_idx
      };
    }
  } else {
    /* filter using the ratio between 2 closest matches*/
    if (best_dist < 0.8 * best_dist2) {
      return {
        screen_idx: qidx,
        pattern_lev: best_lev,
        pattern_idx: best_idx
      };
    }
  }
  return;
}

function getImageVal ({ cols, rows, data }, x, y) {
  let i = x;
  let j = y;
  if (i < 0) {
    i = 0;
  } else if (i > cols - 1) {
    i = cols - 1;
  }
  if (j < 0) {
    j = 0;
  } else if (j > rows - 1) {
    j = rows - 1;
  }
  return data[(j * cols + i) | 0];
}
function ic_angle (img, px, py) {
  const half_k = 15; // half patch size
  let m_01 = 0, m_10 = 0, u = 0, v = 0, v_sum = 0, d = 0, val_plus = 0, val_minus = 0;
  // Treat the center line differently, v=0
  for (u = -half_k; u <= half_k; ++u) {
    m_10 += u * getImageVal(img, px + u, py);
  }

  // Go line by line in the circular patch
  for (v = 1; v <= half_k; ++v) {
    // Proceed over the two lines
    v_sum = 0;
    d = u_max[Number(v)];
    for (u = -d; u <= d; ++u) {
      val_plus = getImageVal(img, px + u, py + v);
      val_minus = getImageVal(img, px + u, py - v);
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

export function find_transform (matches, screen_corners, pattern_corners) {
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
  for (var i = 0; i < matches.length; ++i) {
    var m = matches[Number(i)];
    var s_kp = screen_corners[m.screen_idx];
    var p_kp = pattern_corners[m.pattern_lev][m.pattern_idx];
    pattern_xy[Number(i)] = { 'x': p_kp.x, 'y': p_kp.y, m };
    screen_xy[Number(i)] = { 'x': s_kp.x, 'y': s_kp.y };
  }
  // estimate motion
  var ok = false;
  ok = jsfeat.motion_estimator.ransac(ransac_param, mm_kernel,
    pattern_xy, screen_xy, matches.length, homo3x3, match_mask, 1000);
  // extract good matches and re-estimate
  var good_cnt = 0;
  if (ok) {
    for (var j = 0; j < matches.length; ++j) {
      if (match_mask.data[Number(j)]) {
        pattern_xy[Number(j)].m.good = true;

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
  var i = 0;
  for (; i < 4; ++i) {
    tCorner(pt[Number(i)]);
  }
  return pt;
}

export function tCorner (point) {
  const px = homo3x3.data[0] * point.x + homo3x3.data[1] * point.y + homo3x3.data[2];
  const py = homo3x3.data[3] * point.x + homo3x3.data[4] * point.y + homo3x3.data[5];
  const z = homo3x3.data[6] * point.x + homo3x3.data[7] * point.y + homo3x3.data[8];
  point.x = px / z;
  point.y = py / z;
  return point;
}
