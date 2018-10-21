import '../image.base';
import { rgb2ohta } from '../../utils/rgb-ohta';

let ohta;

self.options = { channel: 0, threshold: 200 };
self.start = function() {};

self.tick = function(px) {
  ohta = rgb2ohta(px);

  if (ohta[self.options.channel] < self.options.threshold) {
    px[0] = 0;
    px[1] = 0;
    px[2] = 0;
  }
};

self.end = function() {};
