import jsfeat from 'jsfeat';
import { addGaussianBlur, detectCorners } from '@/utils/jsfeat/base';

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

  detect (imageData) {
    jsfeat.imgproc.grayscale(imageData.data, imageData.width, imageData.height, this.matrix);
    addGaussianBlur(this.matrix, blur);
    const num = detectCorners(this.matrix, this.corners, this.descriptor, maxCorners);

    return {
      matrix: this.matrix,
      corners: {
        list: this.corners,
        count: num
      }
    };
  }
}

function prepareResults (imgMatrix, corners, matches) {
  let i = (imgMatrix.cols | 0) * (imgMatrix.rows | 0);
  while (--i >= 0) {
    corners[Number(i)] = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
    matches[Number(i)] = new match_t();
  }
  return new jsfeat.matrix_t(32, 500, jsfeat.U8_t | jsfeat.C1_t);
}

var match_t = (function () {
  function match_t (screen_idx, pattern_lev, pattern_idx, distance) {
    if (typeof screen_idx === 'undefined') { screen_idx = 0; }
    if (typeof pattern_lev === 'undefined') { pattern_lev = 0; }
    if (typeof pattern_idx === 'undefined') { pattern_idx = 0; }
    if (typeof distance === 'undefined') { distance = 0; }
    this.screen_idx = screen_idx;
    this.pattern_lev = pattern_lev;
    this.pattern_idx = pattern_idx;
    this.distance = distance;
  }
  return match_t;
})();
