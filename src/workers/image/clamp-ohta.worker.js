import '../image.base';
import { rgb2ohta } from '../../utils/rgb-ohta';

let ohta;

self.options = { i1: [0, 100], i2: [0, 100], i3: [0, 100] };
self.start = function() {
  // console.log(self.options);
};

self.tick = function(px) {
  ohta = rgb2ohta(px);

  let i1Min = (self.options.i1[0] / 100) * 255;
  let i1Max = (self.options.i1[1] / 100) * 255;
  let i2Min = (self.options.i2[0] / 100) * 255 - 128;
  let i2Max = (self.options.i2[1] / 100) * 255 - 128;
  let i3Min = (self.options.i3[0] / 100) * 255 - 128;
  let i3Max = (self.options.i3[1] / 100) * 255 - 128;

  if (ohta[0] < i1Min || ohta[0] > i1Max) {
    self.clearPixel(px);
  }
  if (ohta[1] < i2Min || ohta[1] > i2Max) {
    self.clearPixel(px);
  }
  if (ohta[2] < i3Min || ohta[2] > i3Max) {
    self.clearPixel(px);
  }
};

self.end = function() {};
