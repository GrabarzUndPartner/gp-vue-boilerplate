import '../image.base';
import { rgb2lab /*, lab2rgb*/ } from '../../utils/rgb-lab';

let lab;

self.options = { l: [0, 100], a: [0, 100], b: [0, 100] };
self.start = function() {
  // console.log(self.options);
};

self.tick = function(px) {
  lab = rgb2lab(px);

  let lMin = self.options.l[0];
  let lMax = self.options.l[1];
  let aMin = (self.options.a[0] / 100) * 255 - 128;
  let aMax = (self.options.a[1] / 100) * 255 - 128;
  let bMin = (self.options.b[0] / 100) * 255 - 128;
  let bMax = (self.options.b[1] / 100) * 255 - 128;

  if (lab[0] < lMin || lab[0] > lMax) {
    self.clearPixel(px);
  }
  if (lab[1] < aMin || lab[1] > aMax) {
    self.clearPixel(px);
  }
  if (lab[2] < bMin || lab[2] > bMax) {
    self.clearPixel(px);
  }
};

self.end = function() {};
