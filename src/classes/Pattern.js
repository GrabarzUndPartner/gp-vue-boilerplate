import jsfeat from 'jsfeat';
import { detectKeypoints } from '@/utils/jsfeat/featureDetection';

const maxPatternSize = 512;
const max_per_level = 300;
const scale_factor = Math.sqrt(2.0); // magic number ;)
const numTrainLevels = 4;
const blur = 5;

export default class Pattern {
  constructor() {
    this.matrix = null;
    this.scaleToMaxPatternSize = 1;
    this.corners = [];
    this.cornersCount = [];
    this.descriptors = [];
    this.matrices = [];
  }

  setup (imageData) {
    this.matrix = new jsfeat.matrix_t(imageData.width, imageData.height, jsfeat.U8_t | jsfeat.C1_t);
    jsfeat.imgproc.grayscale(imageData.data, imageData.width, imageData.height, this.matrix);
    this.scaleToMaxPatternSize = Math.min(maxPatternSize / this.matrix.cols, maxPatternSize / this.matrix.rows);
    prepareLevelResults(this.matrix, this.scaleToMaxPatternSize, this.corners, this.descriptors);
  }

  train () {
    const matrices = [];
    let subScale = this.scaleToMaxPatternSize;

    for (let lev = 0; lev < numTrainLevels; ++lev) {
      const subLevelImgMatrix = generateResizedBlurMatrix(this.matrix, subScale, blur);
      matrices[Number(lev)] = subLevelImgMatrix;

      const corners = this.corners[Number(lev)];
      this.cornersCount[Number(lev)] = detectCorners(subLevelImgMatrix, corners, this.descriptors[Number(lev)]);
      // for (let i = 0; i < this.cornersCount[Number(lev)]; ++i) {
      //   corners[Number(i)].x *= 1. / subScale;
      //   corners[Number(i)].y *= 1. / subScale;
      // }
      subScale /= scale_factor;
      console.log('train ' + subLevelImgMatrix.cols + 'x' + subLevelImgMatrix.rows + ' points: ' + this.cornersCount[Number(lev)]);
    }
    return matrices;
  }
}

function prepareLevelResults (imgMatrix, scale, corners, descriptors) {
  let size = (imgMatrix.cols | 0) * (imgMatrix.rows | 0) * scale;
  for (let lev = 0; lev < numTrainLevels; ++lev) {
    corners[Number(lev)] = [];
    // preallocate corners array
    let i = (size) >> lev;
    while (--i >= 0) {
      corners[Number(lev)][Number(i)] = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
    }
    descriptors[Number(lev)] = new jsfeat.matrix_t(32, max_per_level, jsfeat.U8_t | jsfeat.C1_t);
  }
}

function generateResizedBlurMatrix (imgMatrix, scale, blur) {
  const resultMatrix = resizeImgMatrix(imgMatrix, scale);
  addGaussianBlur(resultMatrix, blur);
  return resultMatrix;
}

function resizeImgMatrix (imgMatrix, scale) {
  let width = (imgMatrix.cols * scale) | 0;
  let height = (imgMatrix.rows * scale) | 0;

  let resultMatrix = new jsfeat.matrix_t(imgMatrix.cols, imgMatrix.rows, jsfeat.U8_t | jsfeat.C1_t);
  jsfeat.imgproc.resample(imgMatrix, resultMatrix, width, height);
  return resultMatrix;
}

function addGaussianBlur (imgMatrix, blur) {
  jsfeat.imgproc.gaussian_blur(imgMatrix, imgMatrix, blur | 0);
}

function detectCorners (imgMatrix, corners, descr) {
  const num = detectKeypoints(imgMatrix, corners, max_per_level);
  // optional code line. implemented for optimized dataflow to debug canvas
  corners.splice(num);
  jsfeat.orb.describe(imgMatrix, corners, num, descr);
  return num;
}
