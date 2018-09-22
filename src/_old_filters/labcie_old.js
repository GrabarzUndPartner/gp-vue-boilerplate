import { rgb2lab } from '../utils/rgb-lab';

let average = {
  raw: [0, 0, 0],
  result: [0, 0, 0]
};

export default function(rgb, raw, result) {
  average.raw = raw.average.slice(0);
  average.result = result.average.slice(0);
  raw.count = 0;
  result.count = 0;
  return clampByAverage(rgb, raw, result, average.raw, average.result);
}

function clampByAverage(rgb, raw, result, lastAverageRaw, lastAverageFine) {
  let len = rgb.data.length / 4;

  for (let i = (len - 1) * 4; i >= 0; i -= 4) {
    let rgbData = [rgb.data[i], rgb.data[i + 1], rgb.data[i + 2]];
    let lab = rgb2lab(rgbData);
    calcAverage(raw, i, lab);
    clampLabByAverage(lab, lastAverageRaw, raw, i, rgbData);
    // TODO: proof result object has precise values as the raw object
    let labRaw = rgb2lab([raw.data[i], raw.data[i + 1], raw.data[i + 2]]);
    calcAverage(result, i, labRaw);
    clampLabByAverage(labRaw, lastAverageFine, result, i, rgbData);
  }
  return result;
}

function calcAverage(result, i, lab) {
  // let count = result.data.length / 4 - i / 4;
  let count = result.count;
  if (lab[0] && lab[1] && lab[2]) {
    result.average[0] = (result.average[0] * count + lab[0]) / (count + 1);
    result.average[1] = (result.average[1] * count + lab[1]) / (count + 1);
    result.average[2] = (result.average[2] * count + lab[2]) / (count + 1);
    result.count++;
  }
}

function clampLabByAverage(lab, avg, result, i, rgb) {
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
