import '../image.base';
import { rgb2lab } from '../../utils/rgb-lab';

self.options = { channels: 1 };
self.start = function() {};

let maxRed = Number.NEGATIVE_INFINITY;
let maxBlue = Number.NEGATIVE_INFINITY;

self.tick = function(px) {
  const lab = rgb2lab(px);

  const value = lab[self.options.channels];

  if (value > 0) {
    maxRed = Math.max(maxRed, Math.abs(value));
    const color = (value / maxRed) * 255;

    px[0] = Math.round(color);
    px[1] = 0;
    px[2] = 0;
  } else {
    maxBlue = Math.max(maxBlue, Math.abs(value));
    const color = (value / maxBlue) * 255;

    px[0] = 0;
    px[1] = 0;
    px[2] = Math.round(color);
  }
};

self.end = function() {};
