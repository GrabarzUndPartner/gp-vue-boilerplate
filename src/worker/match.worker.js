import { fromEvent } from 'rxjs';

fromEvent(self, 'message').subscribe((e) => {
  let screen_descriptors = e.data.screen_descriptors;
  let pattern_descriptors = e.data.pattern_descriptors;
  let num_train_levels = e.data.num_train_levels;
  let threshold = e.data.threshold;
  let start = e.data.start;
  let stop = e.data.stop;
  let result = [];

  for (let qidx = start; qidx < stop; ++qidx) {
    result.push(matchCorner(screen_descriptors, pattern_descriptors, num_train_levels, threshold, qidx));
  }
  self.postMessage(result.flat());
  // const array = new Uint8ClampedArray(e.data.buffer);
  // screen_descriptors, pattern_descriptors, num_train_levels, threshold, qidx
  // setTimeout(() => {
  //   self.postMessage(array);
  // }, 2000);
});

function matchCorner (screen_descriptors, pattern_descriptors, num_train_levels = 4, threshold = null, qidx) {
  var query_u32 = screen_descriptors.buffer.i32; // cast to integer buffer
  var lev = 0, pidx = 0, k = 0;

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

function popcnt32 (n) {
  n -= ((n >> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
  return (((n + (n >> 4)) & 0xF0F0F0F) * 0x1010101) >> 24;
}
