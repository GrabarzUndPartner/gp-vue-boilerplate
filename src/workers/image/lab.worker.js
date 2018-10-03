import '../image.base';
import { rgb2lab, lab2rgb } from '../../utils/rgb-lab';

let lab;

self.options = { channels: [0, 1, 2] };
self.start = function() {};

self.tick = function(px) {
  lab = rgb2lab(px);

  let rgb = lab2rgb([
    lab[self.options.channels[0]],
    lab[self.options.channels[1]],
    lab[self.options.channels[2]]
  ]);
  px[0] = rgb[0];
  px[1] = rgb[1];
  px[2] = rgb[2];
};

self.end = function() {};
