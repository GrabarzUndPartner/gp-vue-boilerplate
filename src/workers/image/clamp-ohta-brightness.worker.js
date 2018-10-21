import '../image.base';
import { rgb2ohta } from '../../utils/rgb-ohta';

let ohta;

self.options = { i1: 0, i2: 0, i3: 0 };
self.start = function() {
  // console.log(self.options);
};

self.tick = function(px) {
  ohta = rgb2ohta(px);

  if (ohta[0] < (self.options.i1 / 100) * 255) {
    self.clearPixel(px);
  }
  if (ohta[1] < (self.options.i2 / 100) * 255 - 128) {
    self.clearPixel(px);
  }
  if (ohta[2] < (self.options.i3 / 100) * 255 - 128) {
    self.clearPixel(px);
  }
};

self.end = function() {};
