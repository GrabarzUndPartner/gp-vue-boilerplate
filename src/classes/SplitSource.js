import jsfeat from 'jsfeat';

import { subMatchCorners, find_transformXY, tCorners } from '@/utils/jsfeat/feature';

export default class Pattern {
  constructor() {
    this.matrix = null;

    this.splitRules = [
      { x: 0.0, y: 0, w: 0.5, h: 1 },
      { x: 0.5, y: 0, w: 0.5, h: 1 }
    ];
    // this.splitRules = [
    //   { x: 0, y: 0, w: 1, h: 1 }
    // ];
  }

  setup (dimension) {
    this.matrix = new jsfeat.matrix_t(dimension.width, dimension.height, jsfeat.U8_t | jsfeat.C1_t);
  }

  detect (options, pattern) {
    if (this.detectPromise) {
      return this.detectPromise;
    }

    this.detectPromise = this.matchCorners(options, pattern.descriptors)
      .then((matches) => {

        // matches = matches.filter(n => n);
        const numGoodMatches = find_transformXY(matches, getPatternXY(matches, pattern.corners));
        let shape = [];
        if (numGoodMatches > 8) {
          // what is the right dimension?
          // https://github.com/inspirit/jsfeat/blob/gh-pages/sample_orb.html#L507
          shape = tCorners(pattern.matrix.rows, pattern.matrix.cols);
          console.log('found', matches);
        }

        return {
          matrix: this.matrix,
          corners: {
            list: matches,
            count: matches.length
          },
          shape: shape
        };
      })
      .finally(() => {
        this.detectPromise = undefined;
      });

    return this.detectPromise;
  }

  matchCorners (options, pattern) {
    const { context, width, height } = options;

    const matches = this.splitRules.map(async ({ x, y, w, h }) => {
      const imageData = context.getImageData(Math.floor(width * x), Math.floor(height * y), Math.floor(width * w), Math.floor(height * h));
      const sms = await subMatchCorners(imageData, pattern);
      sms.forEach(match => {
        match.x = match.x + Math.floor(width * x);
        match.y = match.y + Math.floor(height * y);
      });
      return sms;
    });

    return Promise.all(matches).then(values => values.flat());

  }
}

export function getPatternXY (matches, pattern_corners) {
  var pattern_xy = [];
  for (var i = 0; i < matches.length; ++i) {
    var m = matches[Number(i)];
    var p_kp = pattern_corners[m.pattern_lev][m.pattern_idx];
    pattern_xy[Number(i)] = { 'x': p_kp.x, 'y': p_kp.y };
  }
  return pattern_xy;
}

function prepareResults (imgMatrix, corners) {
  let i = (imgMatrix.cols | 0) * (imgMatrix.rows | 0);
  while (--i >= 0) {
    corners[Number(i)] = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
  }
  return new jsfeat.matrix_t(32, 500, jsfeat.U8_t | jsfeat.C1_t);
}
