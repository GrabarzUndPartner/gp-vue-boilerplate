import '../image.base';
import SmoothBuffer from '../../classes/SmoothBuffer';

let buffer = null;
self.options = { threshold: [35, 150] };

self.start = function(imageData) {
  if (!buffer) {
    buffer = new SmoothBuffer(3, imageData.data.length);
  }
};

self.tick = function(px, index) {
  let oldPx = buffer.get(index);
  buffer.set(px, index);

  const oldL = oldPx[0] * 0.3 + oldPx[1] * 0.6 + oldPx[2] * 0.1;
  const newL = px[0] * 0.3 + px[1] * 0.6 + px[2] * 0.1;
  const movement = Math.abs(oldL - newL);
  if (
    movement < self.options.threshold[0] ||
    movement > self.options.threshold[1]
  ) {
    self.clearPixel(px);
  }
};

self.end = function() {
  buffer.increment();
};
