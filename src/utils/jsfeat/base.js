import jsfeat from 'jsfeat';
import { detectKeypoints } from '@/utils/jsfeat/feature';

export function generateResizedBlurMatrix (imgMatrix, scale, blur, targetMatrix) {
  const resultMatrix = resizeImgMatrix(imgMatrix, scale, targetMatrix);
  addGaussianBlur(resultMatrix, blur);
  return resultMatrix;
}

export function resizeImgMatrix (imgMatrix, scale, resultMatrix = new jsfeat.matrix_t(imgMatrix.cols, imgMatrix.rows, jsfeat.U8_t | jsfeat.C1_t)) {
  let width = (imgMatrix.cols * scale) | 0;
  let height = (imgMatrix.rows * scale) | 0;

  jsfeat.imgproc.resample(imgMatrix, resultMatrix, width, height);
  return resultMatrix;
}

export function addGaussianBlur (imgMatrix, blur) {
  jsfeat.imgproc.gaussian_blur(imgMatrix, imgMatrix, blur | 0);
}

export function detectCorners (imgMatrix, corners, descr, max, splice = false, comp) {
  const num = detectKeypoints(imgMatrix, corners, max, comp);
  // optional code line. implemented for optimized dataflow to debug canvas
  if (splice) {
    corners.splice(num);
  }
  jsfeat.orb.describe(imgMatrix, corners, num, descr);
  return num;
}
