import './base';
import { rgb2lab } from '../../utils/rgb-lab';

const steps = 2;
let values = new Array(steps).fill([0, 0, 0]);
let currentValues = new Array(steps);
let lab;

self.start = function() {
  currentValues.fill({ average: [0, 0, 0], count: 0 });
};

self.tick = function(px) {
  currentValues.forEach((value, i) => {
    lab = rgb2lab(px);
    calcAverage(value, lab);
    clampLabByAverage(lab, values[i], px);
  });
};

self.end = function() {
  values = currentValues.map(value => {
    return value.average;
  });
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
      lab[0] > 65 &&
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
