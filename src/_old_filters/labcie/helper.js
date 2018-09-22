export function calcAverage(result, i, lab) {
  // let count = result.data.length / 4 - i / 4;
  let count = result.count;
  if (lab[0] && lab[1] && lab[2]) {
    result.average[0] = (result.average[0] * count + lab[0]) / (count + 1);
    result.average[1] = (result.average[1] * count + lab[1]) / (count + 1);
    result.average[2] = (result.average[2] * count + lab[2]) / (count + 1);
    result.count++;
  }
}

export function clampLabByAverage(lab, avg, result, i, rgb) {
  if (
    // lab[0] > 35 &&
    lab[0] > avg[0] &&
    lab[1] > avg[1] &&
    lab[2] > avg[2] &&
    lab[2] > lab[1]
  ) {
    result.data[i] = rgb[0];
    result.data[i + 1] = rgb[1];
    result.data[i + 2] = rgb[2];
  } else {
    result.data[i] = 0;
    result.data[i + 1] = 0;
    result.data[i + 2] = 0;
  }
  result.data[i + 3] = 255;
}
