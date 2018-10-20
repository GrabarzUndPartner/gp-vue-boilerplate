import '../image.base';
import { rgb2ohta } from '../../utils/rgb-ohta';

let ohta;

self.options = { channels: [0, 1, 2] };
self.start = function() {};

function getChannel(index) {
  if (index) {
    return ohta[index] + 128;
  } else {
    return ohta[index];
  }
}

self.tick = function(px) {
  ohta = rgb2ohta(px);

  px[0] = getChannel(self.options.channels[0]);
  px[1] = getChannel(self.options.channels[1]);
  px[2] = getChannel(self.options.channels[2]);
};

self.end = function() {};
