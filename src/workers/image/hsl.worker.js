import '../image.base';
import { rgb2hsl, hsl2rgb } from '../../utils/rgb-hsl';

let hsl;

self.options = { channels: [0, 1, 2] };
self.start = function() {};

self.tick = function(px) {
  hsl = rgb2hsl(px);

  let rgb = hsl2rgb([
    hsl[self.options.channels[0]],
    hsl[self.options.channels[1]],
    hsl[self.options.channels[2]]
  ]);
  px[0] = rgb[0];
  px[1] = rgb[1];
  px[2] = rgb[2];
};

self.end = function() {};
