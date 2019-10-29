import jsfeat from 'jsfeat';

import { subMatchCorners, find_transform, tCorners } from '@/utils/jsfeat/feature';

export default class Pattern {
  constructor() {
    this.detectPromise = undefined;
    this.matrix = null;
    this.corners = [];
    this.cornersCount = [];
    this.descriptor = [];
  }

  setup (dimension) {

  }

  detect (options, pattern) {
    if (this.detectPromise) {
      return this.detectPromise;
    }

    const { context, width, height } = options;
    const imageDatas = [
      context.getImageData(0, 0, width / 2, height),
      context.getImageData(width / 2, 0, width / 2, height)
    ];
    this.detectPromise = this.matchCorners(imageDatas, pattern.descriptors)
      .then((matches) => {
        // matches = matches.filter(n => n);
        const numGoodMatches = find_transform(matches, this.corners, pattern.corners);
        let shape = [];
        if (numGoodMatches > 8) {
          // what is the right dimension?
          // https://github.com/inspirit/jsfeat/blob/gh-pages/sample_orb.html#L507
          shape = tCorners(pattern.matrix.rows, pattern.matrix.cols);
        }

        return {
          matrix: this.matrix,
          corners: {
            list: this.corners,
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

  matchCorners (imageDatas, pattern) {
    const matches = imageDatas.map(imageData => subMatchCorners(imageData, pattern));

    return Promise.all(matches).then(values => values.flat());

  }
}

function prepareResults (imgMatrix, corners) {
  let i = (imgMatrix.cols | 0) * (imgMatrix.rows | 0);
  while (--i >= 0) {
    corners[Number(i)] = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
  }
  return new jsfeat.matrix_t(32, 500, jsfeat.U8_t | jsfeat.C1_t);
}

