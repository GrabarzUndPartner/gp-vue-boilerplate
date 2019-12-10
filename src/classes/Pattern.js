import jsfeat from 'jsfeat';
import { generateResizedBlurMatrix, detectCorners } from '@/utils/jsfeat/base';

const maxPatternSize = 512;
const maxPerLevel = 300;
const scale_factor = Math.sqrt(1.5); // magic number ;)
const numTrainLevels = 10;
const blur = 5;

export default class Pattern {
  constructor(cutCenter) {
    this.cutCenter = cutCenter;
    this.matrix = null;
    this.scaleToMaxPatternSize = 1;
    this.corners = [];
    this.cornersCount = [];
    this.descriptors = [];
    this.scales = [];
  }

  setup (imageData) {
    this.matrix = new jsfeat.matrix_t(imageData.width, imageData.height, jsfeat.U8_t | jsfeat.C1_t);
    jsfeat.imgproc.grayscale(imageData.data, imageData.width, imageData.height, this.matrix);
    this.scaleToMaxPatternSize = Math.min(maxPatternSize / this.matrix.cols, maxPatternSize / this.matrix.rows);
    prepareLevelResults(this.matrix, this.scaleToMaxPatternSize, this.corners, this.descriptors);
  }

  train () {
    const matrices = [];
    // const matrices = [
    //   new jsfeat.matrix_t(this.matrix.rows, this.matrix.cols, jsfeat.U8_t | jsfeat.C1_t)
    // ];
    let subScale = this.scaleToMaxPatternSize;

    for (let lev = 0; lev < numTrainLevels; ++lev) {
      const subLevelImgMatrix = generateResizedBlurMatrix(this.matrix, subScale, blur);
      matrices[Number(lev)] = subLevelImgMatrix;
      // jsfeat.matmath.transpose(matrices[0], subLevelImgMatrix);

      let max = maxPerLevel;
      let comp;
      if (this.cutCenter) {
        const center = { x: subLevelImgMatrix.cols / 2, y: subLevelImgMatrix.rows / 2 };
        comp = (a, b) => {
          const aDist = -Math.sqrt(Math.pow(a.x - center.x, 2) + Math.pow(a.y - center.y, 2));
          const bDist = -Math.sqrt(Math.pow(b.x - center.x, 2) + Math.pow(b.y - center.y, 2));
          const aScore = a.score * 1;
          const bScore = b.score * 1;
          return (bDist + bScore) < (aDist + aScore);
          // return bDist < aDist;
          // return (b.score < a.score);
        };
        max = 100;
      }

      const scale = 1. / subScale;
      const corners = this.corners[Number(lev)];
      this.cornersCount[Number(lev)] = detectCorners(subLevelImgMatrix, corners, this.descriptors[Number(lev)], max, true, comp);
      for (let i = 0; i < this.cornersCount[Number(lev)]; ++i) {
        corners[Number(i)].x *= scale;
        corners[Number(i)].y *= scale;
      }
      this.scales[Number(lev)] = scale;
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
    descriptors[Number(lev)] = new jsfeat.matrix_t(32, maxPerLevel, jsfeat.U8_t | jsfeat.C1_t);
  }
}
