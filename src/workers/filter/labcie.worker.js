import './base';
import { rgb2lab } from '../../utils/rgb-lab';
// const test = 2;
const values = {
  raw: [0, 0, 0],
  result: [0, 0, 0]
};
// const averages = new Array(test).fill([0, 0, 0]);
// let currentValues = new Array(test);
let rawValues;
let resultValues;
let lab;

self.start = function() {
  // currentValues = new Array(test).fill({ average: [0, 0, 0], count: 0 });
  rawValues = { average: [0, 0, 0], count: 0 };
  resultValues = { average: [0, 0, 0], count: 0 };
};

self.tick = function(px) {
  // currentValues.forEach((currentValue, index) => {
  //   lab = rgb2lab(px);
  //   calcAverage(currentValue, lab);
  //   clampLabByAverage(lab, averages[index], px);
  // });
  lab = rgb2lab(px);
  calcAverage(rawValues, lab);
  clampLabByAverage(lab, values.raw, px);

  let labRaw = rgb2lab(px);
  calcAverage(resultValues, labRaw);
  clampLabByAverage(labRaw, values.result, px);
};

self.end = function() {
  // console.log(averages[0], currentValues[0].average);
  // currentValues.forEach((value, index) => {
  //   averages[index][0] = value.average[0];
  //   averages[index][1] = value.average[1];
  //   averages[index][2] = value.average[2];
  // });
  values.raw = rawValues.average;
  values.result = resultValues.average;
};

function calcAverage(result, lab) {
  let count = result.count;
  if (lab[0] && lab[1] && lab[2]) {
    result.average[0] = (result.average[0] * count + lab[0]) / (count + 1);
    result.average[1] = (result.average[1] * count + lab[1]) / (count + 1);
    result.average[2] = (result.average[2] * count + lab[2]) / (count + 1);
    result.count++;
  }
}

function clampLabByAverage(lab, avg, px) {
  if (
    !(
      lab[0] > 55 &&
      lab[0] > avg[0] &&
      lab[1] > avg[1] &&
      lab[2] > avg[2] &&
      lab[2] > lab[1]
    )
  ) {
    px[0] = 0;
    px[1] = 0;
    px[2] = 0;
  }
}
