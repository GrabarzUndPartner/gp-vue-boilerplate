<template>
  <div>
    <h2>Pattern: Original + Canvas</h2>
    <atom-canvas-image
      url="/original2_square.jpg"
      @imagedata="onPatternUpdate"
    />
    <h2>Detected Corners</h2>
    <atom-canvas-debug
      v-for="(config, index) in options"
      :key="index"
      :options="config"
    />

    <h2>Cam: Original + Canvas</h2>
    <atom-canvas-video
      @load="onVideoLoad"
      @imagedata="onUpdate"
    />
    <h2>Detected Corners</h2>
    <atom-canvas-debug :options="debugOptionsA" />
    <h2>Matches</h2>
    <atom-canvas-debug :options="debugOptionsB" />
  </div>
</template>

<script>
import AtomCanvasImage from '@/components/atoms/canvas/Image';
import AtomCanvasVideo from '@/components/atoms/canvas/Video';
import AtomCanvasDebug from '@/components/atoms/canvas/Debug';
import jsfeat from 'jsFeat';
import Pattern from '@/classes/Pattern';
import Source from '@/classes/Source';

export default {
  components: {
    AtomCanvasImage,
    AtomCanvasVideo,
    AtomCanvasDebug
  },

  data () {
    return {
      options: [],
      imageData: null,
      pattern: new Pattern(),
      source: new Source(),
      debugOptionsA: null,
      debugOptionsB: null,
      matches: [],
      matchesPattern: [],
      corners: null,
      cornersPattern: null
    };
  },

  mounted () {
    jsfeat.fast_corners.set_threshold(20);
    jsfeat.yape06.laplacian_threshold = 30 | 0;
    jsfeat.yape06.min_eigen_value_threshold = 25 | 0;
    this.screen_descriptors = new jsfeat.matrix_t(32, 500, jsfeat.U8_t | jsfeat.C1_t);
    this.pattern_descriptors = new jsfeat.matrix_t(32, 300, jsfeat.U8_t | jsfeat.C1_t);
  },

  methods: {
    onPatternUpdate (e) {
      this.imageData = e;
      this.pattern.setup(e);
      const matrices = this.pattern.train();
      this.options = this.pattern.corners.map((corners, index) => {
        return {
          matrix: matrices[Number(index)],
          corners: {
            list: corners,
            count: this.pattern.cornersCount[Number(index)],
            scale: this.pattern.scales[Number(index)]
          }
        };
      });
    },

    onVideoLoad (dimension) {
      // console.log(dimension);
      this.source.setup(dimension);
    },

    onUpdate (e) {
      let option = this.source.detect(e, this.pattern);
      this.debugOptionsA = option;
      // const matrixA = getGrayscaleMatrix(e);
      // this.debugOptionsA = {
      //   imageData: e,
      //   matrix: matrixA
      // };

      // const matrixB = addGaussianBlur(matrixA, 3);
      // const corners = detectCorners(matrixB, this.matches);

      // // console.log(corners.length);
      // this.debugOptionsB = {
      //   imageData: e,
      //   matrix: matrixB
      // };

      // const numCorners = detectKeypoints(matrixB, corners);
      // jsfeat.orb.describe(matrixB, corners, numCorners, this.screen_descriptors);
      // this.debugOptionsC = {
      //   imageData: e,
      //   matrix: matrixB,
      //   corners: {
      //     list: corners,
      //     count: numCorners
      //   }
      // };
      // const numMatches = match_pattern(this.screen_descriptors, [
      //   this.pattern_descriptors
      // ], 1, this.matches, 48);
      // const goodMatches = find_transform(this.matches, numMatches, corners, [
      //   this.cornersPattern
      // ]);

      // if (numMatches) {
      //   this.debugOptionsD = {
      //     imageData: e,
      //     matrix: matrixB,
      //     corners: {
      //       list: corners,
      //       count: numCorners
      //     },
      //     pattern: {
      //       list: this.cornersPattern,
      //       count: this.cornersPatternCount
      //     },
      //     matches: {
      //       list: this.matches,
      //       count: numMatches
      //     },
      //     match_mask: match_mask
      //   };

      // }

      // this.matches = [];
    }
  }
};

// function getGrayscaleMatrix (imageData) {
//   const grayscaleMatrix = new jsfeat.matrix_t(imageData.width, imageData.height, jsfeat.U8_t | jsfeat.C1_t);
//   const code = jsfeat.COLOR_RGBA2GRAY;
//   jsfeat.imgproc.grayscale(imageData.data, imageData.width, imageData.height, grayscaleMatrix, code);
//   return grayscaleMatrix;
// }

// function addGaussianBlur (matrix, r) {
//   const kernel_size = (r + 1) << 1;
//   const gaussianMatrix = new jsfeat.matrix_t(matrix.cols, matrix.rows, matrix.type);
//   jsfeat.imgproc.gaussian_blur(matrix, gaussianMatrix, kernel_size, 0);
//   return gaussianMatrix;
// }

// function detectCorners (matrix, matches) {
//   var corners = [];
//   var i = matrix.cols * matrix.rows;
//   while (--i >= 0) {
//     corners[Number(i)] = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
//     matches[Number(i)] = new match_t();
//   }
//   return corners;
// }

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

// function detectKeypoints (matrix, corners, max_allowed = 500) {

//   var count = jsfeat.yape06.detect(matrix, corners, 17);
//   // sort by score and reduce the count if needed
//   if (count > max_allowed) {
//     jsfeat.math.qsort(corners, 0, count - 1, function (a, b) { return (b.score < a.score); });
//     count = max_allowed;
//   }
//   // calculate dominant orientation for each keypoint
//   for (var i = 0; i < count; ++i) {
//     corners[Number(i)].angle = ic_angle(matrix, corners[Number(i)].x, corners[Number(i)].y);
//   }
//   return count;
// }

// const u_max = new Int32Array([
//   15, 15, 15, 15, 14, 14, 14, 13, 13, 12, 11, 10, 9, 8, 6, 3, 0
// ]);

// function ic_angle (img, px, py) {
//   var half_k = 15; // half patch size
//   var m_01 = 0, m_10 = 0;
//   var src = img.data, step = img.cols;
//   var u = 0, v = 0, center_off = (py * step + px) | 0;
//   var v_sum = 0, d = 0, val_plus = 0, val_minus = 0;
//   // Treat the center line differently, v=0
//   for (u = -half_k; u <= half_k; ++u)
//     m_10 += u * src[center_off + u];
//   // Go line by line in the circular patch
//   for (v = 1; v <= half_k; ++v) {
//     // Proceed over the two lines
//     v_sum = 0;
//     d = u_max[Number(v)];
//     for (u = -d; u <= d; ++u) {
//       val_plus = src[center_off + u + v * step];
//       val_minus = src[center_off + u - v * step];
//       v_sum += (val_plus - val_minus);
//       m_10 += u * (val_plus + val_minus);
//     }
//     m_01 += v * v_sum;
//   }
//   return Math.atan2(m_01, m_10);
// }

// function match_pattern (screen_descriptors, pattern_descriptors, num_train_levels = 4, matches, threshold) {
//   var q_cnt = screen_descriptors.rows;
//   var query_u32 = screen_descriptors.buffer.i32; // cast to integer buffer
//   var qd_off = 0;
//   var qidx = 0, lev = 0, pidx = 0, k = 0;
//   var num_matches = 0;
//   for (qidx = 0; qidx < q_cnt; ++qidx) {
//     var best_dist = 256;
//     var best_dist2 = 256;
//     var best_idx = -1;
//     var best_lev = -1;
//     for (lev = 0; lev < num_train_levels; ++lev) {
//       var lev_descr = pattern_descriptors[Number(lev)];
//       var ld_cnt = lev_descr.rows;
//       var ld_i32 = lev_descr.buffer.i32; // cast to integer buffer
//       var ld_off = 0;
//       for (pidx = 0; pidx < ld_cnt; ++pidx) {
//         var curr_d = 0;
//         // our descriptor is 32 bytes so we have 8 Integers
//         for (k = 0; k < 8; ++k) {
//           curr_d += popcnt32(query_u32[qd_off + k] ^ ld_i32[ld_off + k]);
//         }
//         if (curr_d < best_dist) {
//           best_dist2 = best_dist;
//           best_dist = curr_d;
//           best_lev = lev;
//           best_idx = pidx;
//         } else if (curr_d < best_dist2) {
//           best_dist2 = curr_d;
//         }
//         ld_off += 8; // next descriptor
//       }
//     }
//     // filter out by some threshold
//     if (best_dist < threshold) {
//       matches[Number(num_matches)].screen_idx = qidx;
//       matches[Number(num_matches)].pattern_lev = best_lev;
//       matches[Number(num_matches)].pattern_idx = best_idx;
//       num_matches++;
//     }
//     //
//     /* filter using the ratio between 2 closest matches
//     if(best_dist < 0.8*best_dist2) {
//         matches[num_matches].screen_idx = qidx;
//         matches[num_matches].pattern_lev = best_lev;
//         matches[num_matches].pattern_idx = best_idx;
//         num_matches++;
//     }
//     */
//     qd_off += 8; // next query descriptor
//   }
//   return num_matches;
// }

// function popcnt32 (n) {
//   n -= ((n >> 1) & 0x55555555);
//   n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
//   return (((n + (n >> 4)) & 0xF0F0F0F) * 0x1010101) >> 24;
// }

// let homo3x3 = new jsfeat.matrix_t(3, 3, jsfeat.F32C1_t);
// let match_mask = new jsfeat.matrix_t(500, 1, jsfeat.U8C1_t);

// function find_transform (matches, count, screen_corners, pattern_corners) {
//   // motion kernel
//   var mm_kernel = new jsfeat.motion_model.homography2d();
//   // ransac params
//   var num_model_points = 4;
//   var reproj_threshold = 3;
//   var ransac_param = new jsfeat.ransac_params_t(num_model_points,
//     reproj_threshold, 0.5, 0.99);
//   var pattern_xy = [];
//   var screen_xy = [];
//   // construct correspondences
//   for (var i = 0; i < count; ++i) {
//     var m = matches[Number(i)];
//     var s_kp = screen_corners[m.screen_idx];
//     var p_kp = pattern_corners[m.pattern_lev][m.pattern_idx];
//     pattern_xy[Number(i)] = { 'x': p_kp.x, 'y': p_kp.y };
//     screen_xy[Number(i)] = { 'x': s_kp.x, 'y': s_kp.y };
//   }
//   // estimate motion
//   var ok = false;
//   ok = jsfeat.motion_estimator.ransac(ransac_param, mm_kernel,
//     pattern_xy, screen_xy, count, homo3x3, match_mask, 1000);
//   // extract good matches and re-estimate
//   var good_cnt = 0;
//   if (ok) {
//     for (var j = 0; j < count; ++j) {
//       if (match_mask.data[Number(j)]) {
//         pattern_xy[Number(good_cnt)].x = pattern_xy[Number(j)].x;
//         pattern_xy[Number(good_cnt)].y = pattern_xy[Number(j)].y;
//         screen_xy[Number(good_cnt)].x = screen_xy[Number(j)].x;
//         screen_xy[Number(good_cnt)].y = screen_xy[Number(j)].y;
//         good_cnt++;
//       }
//     }
//     // run kernel directly with inliers only
//     mm_kernel.run(pattern_xy, screen_xy, homo3x3, good_cnt);
//   } else {
//     jsfeat.matmath.identity_3x3(homo3x3, 1.0);
//   }
//   return good_cnt;
// }
</script>

<style lang="postcss" scoped>
canvas {
  display: block;
}
</style>
