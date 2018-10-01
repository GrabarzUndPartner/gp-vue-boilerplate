import '../image.base';
import { rgb2lab } from '../../utils/rgb-lab';

let lab;

self.start = function() {};

self.tick = function(px) {
  lab = rgb2lab(px);
  px[0] = lab[2] + 128;
  px[1] = lab[2] + 128;
  px[2] = lab[2] + 128;
};

self.end = function() {};
