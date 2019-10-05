import jsfeat from 'jsfeat';

const maxPatternSize = 512;
const max_per_level = 300;
const scale_factor = Math.sqrt(2.0); // magic number ;)
const numTrainLevels = 4;
const blur = 5;

export default class Pattern {
  constructor() {
    this.corners = [];
    this.descriptors = [];
    this.matrices = [];
  }

  train (imageData) {
    const imgMatrix = new jsfeat.matrix_t(imageData.width, imageData.height, jsfeat.U8_t | jsfeat.C1_t);
    jsfeat.imgproc.grayscale(imageData.data, imageData.width, imageData.height, imgMatrix);

    const scaleToMaxPatternSize = Math.min(maxPatternSize / imgMatrix.cols, maxPatternSize / imgMatrix.rows);
    this.setup(imgMatrix, scaleToMaxPatternSize);
    this.trainFirstLevel(imgMatrix, scaleToMaxPatternSize);
    this.trainSubLevels(imgMatrix, scaleToMaxPatternSize);

    return imgMatrix;
  }

  setup (imgMatrix, scale) {
    let size = (imgMatrix.cols | 0) * (imgMatrix.rows | 0) * scale;
    for (let lev = 0; lev < numTrainLevels; ++lev) {
      this.corners[Number(lev)] = [];
      // preallocate corners array
      let i = (size) >> lev;
      while (--i >= 0) {
        this.corners[Number(lev)][Number(i)] = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
      }
      this.descriptors[Number(lev)] = new jsfeat.matrix_t(32, max_per_level, jsfeat.U8_t | jsfeat.C1_t);
    }
  }

  trainFirstLevel (imgMatrix, scale) {
    const resultImgMatrix = generateResizedBlurMatrix(imgMatrix, scale, blur);
    this.matrices[0] = resultImgMatrix;

    const corners_num = detectCorners(resultImgMatrix, this.corners[0], this.descriptors[0]);
    console.log('train ' + resultImgMatrix.cols + 'x' + resultImgMatrix.rows + ' points: ' + corners_num);
  }

  trainSubLevels (imgMatrix, scale) {
    const resultImgMatrix = resizeImgMatrix(imgMatrix, scale);

    let subScale = 1;
    for (let lev = 1; lev < numTrainLevels; ++lev) {
      subScale /= scale_factor;
      const subLevelImgMatrix = generateResizedBlurMatrix(resultImgMatrix, subScale, blur);
      this.matrices[Number(lev)] = subLevelImgMatrix;

      const corners = this.corners[Number(lev)];
      const corners_num = detectCorners(subLevelImgMatrix, corners, this.descriptors[Number(lev)]);
      for (let i = 0; i < corners_num; ++i) {
        corners[Number(i)].x *= 1. / subScale;
        corners[Number(i)].y *= 1. / subScale;
      }

      console.log('train ' + subLevelImgMatrix.cols + 'x' + subLevelImgMatrix.rows + ' points: ' + corners_num);
    }
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
  const num = detect_keypoints(imgMatrix, corners, max_per_level);
  jsfeat.orb.describe(imgMatrix, corners, num, descr);
  return num;
}

function detect_keypoints (img, corners, max_allowed) {
  // detect features
  let count = jsfeat.yape06.detect(img, corners, 17);
  // sort by score and reduce the count if needed
  if (count > max_allowed) {
    jsfeat.math.qsort(corners, 0, count - 1, function (a, b) { return (b.score < a.score); });
    count = max_allowed;
  }
  // calculate dominant orientation for each keypoint
  for (let i = 0; i < count; ++i) {
    corners[Number(i)].angle = ic_angle(img, corners[Number(i)].x, corners[Number(i)].y);
  }
  return count;
}

const u_max = new Int32Array([
  15, 15, 15, 15, 14, 14, 14, 13, 13, 12, 11, 10, 9, 8, 6, 3, 0
]);
function ic_angle (img, px, py) {
  const half_k = 15; // half patch size
  const src = img.data, step = img.cols, center_off = (py * step + px) | 0;
  let m_01 = 0, m_10 = 0, u = 0, v = 0, v_sum = 0, d = 0, val_plus = 0, val_minus = 0;
  // Treat the center line differently, v=0
  for (u = -half_k; u <= half_k; ++u)
    m_10 += u * src[center_off + u];
  // Go line by line in the circular patch
  for (v = 1; v <= half_k; ++v) {
    // Proceed over the two lines
    v_sum = 0;
    d = u_max[Number(v)];
    for (u = -d; u <= d; ++u) {
      val_plus = src[center_off + u + v * step];
      val_minus = src[center_off + u - v * step];
      v_sum += (val_plus - val_minus);
      m_10 += u * (val_plus + val_minus);
    }
    m_01 += v * v_sum;
  }
  return Math.atan2(m_01, m_10);
}
