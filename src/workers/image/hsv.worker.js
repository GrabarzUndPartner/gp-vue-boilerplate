import '../image.base';
import { rgb2hsv, hsv2rgb } from '../../utils/rgb-hsv';

let hsv;

self.options = { channels: [0, 1, 2] };
self.start = function() {};

self.tick = function(px) {
  hsv = rgb2hsv(px);

  let rgb = hsv2rgb([
    hsv[self.options.channels[0]],
    hsv[self.options.channels[1]],
    hsv[self.options.channels[2]]
  ]);
  px[0] = rgb[0];
  px[1] = rgb[1];
  px[2] = rgb[2];
};

self.end = function() {};
