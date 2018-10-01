import '../image.base';
import { rgb2lab } from '../../utils/rgb-lab';

let lab;

self.start = function() {};

self.tick = function(px) {
  lab = rgb2lab(px);
  px[0] = lab[0];
  px[1] = lab[0];
  px[2] = lab[0];
};

self.end = function() {};
