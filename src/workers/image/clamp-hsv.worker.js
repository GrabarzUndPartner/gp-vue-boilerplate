import '../image.base';
import { rgb2hsv } from '../../utils/rgb-hsv';

let hsv;

self.options = { h: [0, 100], s: [0, 100], v: [0, 100] };
self.start = function() {};

self.tick = function(px) {
  hsv = rgb2hsv(px);

  if (hsv[0] < self.options.h[0] / 100 || hsv[0] > self.options.h[1] / 100) {
    self.clearPixel(px);
  }
  if (hsv[1] < self.options.s[0] / 100 || hsv[1] > self.options.s[1] / 100) {
    self.clearPixel(px);
  }
  if (hsv[2] < self.options.v[0] / 100 || hsv[2] > self.options.v[1] / 100) {
    self.clearPixel(px);
  }
};

self.end = function() {};
