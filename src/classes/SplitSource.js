import jsfeat from 'jsfeat';

import { subMatchCorners, find_transform, tCorners, tCorner } from '@/utils/jsfeat/feature';

export default class Pattern {
  constructor() {
    this.matrix = null;

    this.border = 15;

    this.splitRules = [];

    const w = 2;
    const h = 2;
    for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
        this.splitRules.push({ x: x / w, y: y / h, w: 1 / w, h: 1 / h });
      }
    }
    console.log('splitRules', w, h, this.splitRules);
  }

  setup (dimension) {
    this.matrix = new jsfeat.matrix_t(dimension.width, dimension.height, jsfeat.U8_t | jsfeat.C1_t);
  }

  detect (options, pattern) {
    if (this.detectPromise) {
      return this.detectPromise;
    }

    this.detectPromise = this.matchCorners(options, pattern.descriptors)
      .then(({ matches, corners }) => {

        const numGoodMatches = find_transform(matches, corners, pattern.corners);
        let shape = [];
        let point;
        // console.log('numGoodMatches', numGoodMatches, matches, corners);
        if (numGoodMatches > 20) {
          // what is the right dimension?
          // https://github.com/inspirit/jsfeat/blob/gh-pages/sample_orb.html#L507
          shape = tCorners(pattern.matrix.rows, pattern.matrix.cols);

          // point = shape.reduce((t, p) => (t.x += p.x / 4, t.y += p.y / 4, t), { x: 0, y: 0 });
          point = tCorner({ x: pattern.matrix.rows * 0.5, y: pattern.matrix.cols * 0.5 });

          moveMatchToPattern(matches, pattern.descriptors);
        }

        return {
          context: options.context,
          matrix: { rows: this.matrix.rows, cols: this.matrix.cols },
          corners: {
            list: corners,
            count: corners.length
          },
          shape,
          point,
          goodMatches: numGoodMatches
        };
      })
      .finally(() => {
        this.detectPromise = undefined;
      });

    return this.detectPromise;
  }

  matchCorners (options, pattern) {
    const { context, width, height } = options;
    const { border, splitRules } = this;

    console.time('concurrent match corners');

    const matches = splitRules.map(async ({ x, y, w, h }) => {
      const fx = Math.max(0, Math.floor(width * x - border));
      const fy = Math.max(0, Math.floor(height * y - border));
      const tx = Math.min(width, Math.floor(width * x + width * w + border));
      const ty = Math.min(height, Math.floor(height * y + height * h + border));

      const imageData = context.getImageData(fx, fy, tx - fx, ty - fy);
      return subMatchCorners(imageData, pattern)
        .then(matchGroup => {
          matchGroup.corners = matchGroup.corners
            .map(({ x, y, ...corner }) => ({ ...corner, x: x + fx, y: y + fy }));
          return matchGroup;
        });
    });

    return Promise.all(matches)
      .then(allMatches => {
        console.timeEnd('concurrent match corners');

        let offset = 0;
        const resCorners = [];
        let resMatches = [];

        allMatches.forEach(({ matches, corners }) => {
          matches.forEach(match => {
            match.screen_idx += offset;
          });
          offset += corners.length;
          resMatches.push(...matches);
          resCorners.push(...corners);
        });
        const dups = new Set();

        // const count = resMatches.length;
        resMatches = resMatches.filter(m => {
          var s_kp = resCorners[m.screen_idx];
          const key = `${s_kp.x};${s_kp.y}`;
          if (dups.has(key)) {
            return false;
          }
          dups.add(key);
          return true;
        });
        // console.log('filtered', count, resMatches.length);
        // console.log({ corners: resCorners, matches: resMatches });
        return { corners: resCorners, matches: resMatches };
      });

  }
}

function moveMatchToPattern (matches, pattern_descriptors) {

  matches.forEach(match => {
    if (!match.good) {
      return;
    }
    let lev_descr = pattern_descriptors[match.pattern_lev];
    let ld_i32 = lev_descr.buffer.i32;

    for (let k = 0; k < 8; k++) {
      ld_i32[match.pattern_idx * 8 + k] = match.arr[k];
    }
  });
}
