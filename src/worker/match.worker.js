import { fromEvent } from 'rxjs';

fromEvent(self, 'message').subscribe((e) => {
  let { query_u32, pattern_descriptors, threshold, start, stop } = e.data;
  let result = [];

  for (let qidx = start; qidx < stop; ++qidx) {
    result.push(matchCorner(query_u32, pattern_descriptors, threshold, qidx));
  }
  // console.log(result);
  self.postMessage(result.filter(function (e) { return e; }).flat());
});

function getDistance (query_u32, qidx, ld_i32, pidx) {
  var k = 0;

  var curr_d = 0;
  // our descriptor is 32 bytes so we have 8 Integers
  for (k = 0; k < 8; ++k) {
    curr_d += popcnt32(query_u32[(qidx * 8) + k] ^ ld_i32[(pidx * 8) + k]);
  }
  return curr_d;

}

function matchCorner (query_u32, pattern_descriptors, threshold = null, qidx) {
  var lev = 0, pidx = 0;
  var best_dist = 256;
  var best_dist2 = 256;
  var best_idx = -1;
  var best_lev = -1;
  for (lev = 0; lev < pattern_descriptors.length; ++lev) {
    var lev_descr = pattern_descriptors[Number(lev)];
    var ld_cnt = lev_descr.rows;
    var ld_i32 = lev_descr.buffer.i32; // cast to integer buffer

    for (pidx = 0; pidx < ld_cnt; ++pidx) {
      var curr_d = getDistance(query_u32, qidx, ld_i32, pidx);

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
