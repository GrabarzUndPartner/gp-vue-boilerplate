import '../image.base';
import SmoothBuffer from '../../classes/SmoothBuffer';

let buffer = null;
self.options = {};

self.start = function(imageData) {
  if (!buffer) {
    buffer = new SmoothBuffer(3, imageData.data.length);
  }
};

self.tick = function(px, index) {
  let smoothPx = buffer.get(index);
  buffer.set(px, index);

  px[0] = smoothPx[0];
  px[1] = smoothPx[1];
  px[2] = smoothPx[2];
};

self.end = function() {
  buffer.increment();
};
