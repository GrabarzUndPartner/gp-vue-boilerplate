import jsfeat from 'jsfeat';
import Match from '@/classes/Match';
import { addGaussianBlur, detectCorners } from '@/utils/jsfeat/base';
import { match, find_transform, tCorners } from '@/utils/jsfeat/feature';

const blur = 5;
const maxCorners = 300;

export default class Pattern {
  constructor() {
    this.matrix = null;
    this.corners = [];
    this.cornersCount = [];
    this.descriptor = [];
    this.matches = [];
  }

  setup (dimension) {
    this.matrix = new jsfeat.matrix_t(dimension.width, dimension.height, jsfeat.U8_t | jsfeat.C1_t);
    this.descriptor = prepareResults(this.matrix, this.corners, this.matches);
  }

  detect (imageData, pattern) {
    jsfeat.imgproc.grayscale(imageData.data, imageData.width, imageData.height, this.matrix);
    addGaussianBlur(this.matrix, blur);
    const num = detectCorners(this.matrix, this.corners, this.descriptor, maxCorners);
    const numMatches = match(this.descriptor, pattern.descriptors, pattern.descriptors.length, this.matches, 48);
    const numGoodMatches = find_transform(this.matches, numMatches, this.corners, pattern.corners);
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
  }
}

function prepareResults (imgMatrix, corners, matches) {
  let i = (imgMatrix.cols | 0) * (imgMatrix.rows | 0);
  while (--i >= 0) {
    corners[Number(i)] = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
    matches[Number(i)] = new Match();
  }
  return new jsfeat.matrix_t(32, 500, jsfeat.U8_t | jsfeat.C1_t);
}

