import jsfeat from 'jsfeat';

import { addGaussianBlur, detectCorners } from '@/utils/jsfeat/base';
import { matchCorners, find_transform, tCorners } from '@/utils/jsfeat/feature';

const blur = 5;
const maxCorners = 300;

export default class Pattern {
  constructor() {
    this.detectPromise = undefined;
    this.matrix = null;
    this.corners = [];
    this.cornersCount = [];
    this.descriptor = [];
  }

  setup (dimension) {
    this.matrix = new jsfeat.matrix_t(dimension.width, dimension.height, jsfeat.U8_t | jsfeat.C1_t);
    this.descriptor = prepareResults(this.matrix, this.corners);
  }

  detect (options, pattern) {
    if (this.detectPromise) {
      return this.detectPromise;
    }

    console.time('concurrent match corners');
    const imageData = options.context.getImageData(0, 0, options.width, options.height);
    jsfeat.imgproc.grayscale(imageData.data, imageData.width, imageData.height, this.matrix);
    addGaussianBlur(this.matrix, blur);
    const num = detectCorners(this.matrix, this.corners, this.descriptor, maxCorners);
    this.detectPromise = matchCorners(this.descriptor, pattern.descriptors, 48)
      .then((matches) => {
        console.timeEnd('concurrent match corners');
        matches = matches.filter(n => n);
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
            count: num
          },
          shape: shape
        };
      })
      .finally(() => {
        this.detectPromise = undefined;
      });

    return this.detectPromise;
  }
}

function prepareResults (imgMatrix, corners) {
  let i = (imgMatrix.cols | 0) * (imgMatrix.rows | 0);
  while (--i >= 0) {
    corners[Number(i)] = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
  }
  return new jsfeat.matrix_t(32, 500, jsfeat.U8_t | jsfeat.C1_t);
}

