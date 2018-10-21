import '../image.base';
import { rgb2hsl } from '../../utils/rgb-hsl';

let hsl;

self.options = { channel: 2, threshold: 50 };
self.start = function() {};

self.tick = function(px) {
  hsl = rgb2hsl(px);

  if (hsl[self.options.channel] < self.options.threshold / 100) {
    px[0] = 0;
    px[1] = 0;
    px[2] = 0;
  }
};

self.end = function() {};
