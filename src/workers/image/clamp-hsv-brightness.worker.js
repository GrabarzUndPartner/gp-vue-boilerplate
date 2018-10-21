import '../image.base';
import { rgb2hsv } from '../../utils/rgb-hsv';

let hsv;

self.options = { channel: 2, threshold: 50 };
self.start = function() {};

self.tick = function(px) {
  hsv = rgb2hsv(px);

  if (hsv[self.options.channel] < self.options.threshold / 100) {
    px[0] = 0;
    px[1] = 0;
    px[2] = 0;
  }
};

self.end = function() {};
