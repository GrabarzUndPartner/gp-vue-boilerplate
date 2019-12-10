import jsfeat from 'jsfeat';
import { fromEvent } from 'rxjs';

const blur = 5;
const maxCorners = 300;

class Pattern {
  constructor(dimension) {
    this.matrix = null;
    this.corners = [];
    this.cornersCount = [];
    this.descriptor = [];
    this.setup(dimension);
  }

  setup (dimension) {
    this.dimension = dimension;
    this.matrix = new jsfeat.matrix_t(dimension.width, dimension.height, jsfeat.U8_t | jsfeat.C1_t);
    this.descriptor = prepareResults(this.matrix, this.corners);
  }

  detect (imageData, pattern_descriptors) {
    jsfeat.imgproc.grayscale(imageData.data, imageData.width, imageData.height, this.matrix);
    jsfeat.imgproc.gaussian_blur(this.matrix, this.matrix, blur | 0);
    const c = detectCorners(this.matrix, this.corners, this.descriptor, maxCorners);
    const corners = this.corners.slice(0, c);
    //console.log('corners', c);
    const matches = matchCorners(this.descriptor, pattern_descriptors, corners, 48);
    return {
      matches,
      corners
    };
  }
}

const patterns = new Map();

fromEvent(self, 'message').subscribe((e) => {
  let { imageData, pattern_descriptors } = e.data;
  const patternKey = `${imageData.width};${imageData.height}`;
  let pattern = patterns.get(patternKey);
  if (!pattern) {
    pattern = new Pattern(imageData);
    patterns.set(patternKey, pattern);
    console.log('new pattern made', patternKey);
  }

  let result = pattern.detect(imageData, pattern_descriptors);

  //console.log('result', result.length);
  self.postMessage(result);
});

function prepareResults (imgMatrix, corners) {
  let i = (imgMatrix.cols | 0) * (imgMatrix.rows | 0);
  while (--i >= 0) {
    corners[Number(i)] = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
  }
  return new jsfeat.matrix_t(32, 500, jsfeat.U8_t | jsfeat.C1_t);
}

function getDistance (query_u32, qidx, ld_i32, pidx) {
  let k = 0;

  let curr_d = 0;
  // our descriptor is 32 bytes so we have 8 Integers
  for (k = 0; k < 8; ++k) {
    const v = query_u32[(qidx * 8) + k] ^ ld_i32[(pidx * 8) + k];
    const d = popcnt32(v);

    // if (Math.random() > 0.98) {
    //   const md = (v >>> 0).toString(2)
    //     .split('')
    //     .reduce((acc, val) => (
    //       acc + parseInt(val, 10)
    //     ), 0);

    //   console.log('jaja', d, md);
    // }
    curr_d += d;
  }
  return curr_d;
}

function matchCorners (screen_descriptors, pattern_descriptors, corners, threshold = null) {
  let q_cnt = screen_descriptors.rows;
  let query_u32 = screen_descriptors.buffer.i32;

  const result = [];
  for (let qidx = 0; qidx < q_cnt; ++qidx) {
    const m = matchCorner(query_u32, pattern_descriptors, threshold, qidx);
    if (m) {
      const arr = new Int32Array(8);
      for (let k = 0; k < 8; ++k) {
        arr[k] = query_u32[(qidx * 8) + k];
      }
      m.arr = arr;
      corners[qidx].matched = true;
      result.push(m);
    } else {
      corners[qidx].matched = false;
    }
  }
  return result;
}

function matchCorner (query_u32, pattern_descriptors, threshold = null, qidx) {
  let lev = 0, pidx = 0;
  let best_dist = 256;
  let best_dist2 = 256;
  let best_idx = -1;
  let best_lev = -1;
  for (lev = 0; lev < pattern_descriptors.length; ++lev) {
    let lev_descr = pattern_descriptors[Number(lev)];
    let ld_cnt = lev_descr.rows;
    let ld_i32 = lev_descr.buffer.i32; // cast to integer buffer

    for (pidx = 0; pidx < ld_cnt; ++pidx) {
      let curr_d = getDistance(query_u32, qidx, ld_i32, pidx);

      if (curr_d < best_dist) {
        best_dist2 = best_dist;
        best_dist = curr_d;
        best_lev = lev;
        best_idx = pidx;
      } else if (curr_d < best_dist2) {
        best_dist2 = curr_d;
      }
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

function popcnt32 (n) {
  n -= ((n >> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
  return (((n + (n >> 4)) & 0xF0F0F0F) * 0x1010101) >> 24;
}

function detectKeypoints (img, corners, max_allowed) {
  // detect features
  let count = jsfeat.yape06.detect(img, corners, 3);
  // let count = jsfeat.fast_corners.detect(img, corners, 5);
  // sort by score and reduce the count if needed
  if (count > max_allowed) {
    jsfeat.math.qsort(corners, 0, count - 1, function (a, b) { return (b.score < a.score); });
    count = max_allowed;
  }
  // calculate dominant orientation for each keypoint
  for (let i = 0; i < count; ++i) {
    const corner = corners[Number(i)];
    corner.angle = ic_angle(img, corner.x, corner.y);
  }
  return count;
}

function detectCorners (imgMatrix, corners, descr, max, splice = false) {
  const num = detectKeypoints(imgMatrix, corners, max);
  // optional code line. implemented for optimized dataflow to debug canvas
  if (splice) {
    corners.splice(num);
  }
  jsfeat.orb.describe(imgMatrix, corners, num, descr);
  return num;
}

const u_max = new Int32Array([
  15, 15, 15, 15, 14, 14, 14, 13, 13, 12, 11, 10, 9, 8, 6, 3, 0
]);

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
