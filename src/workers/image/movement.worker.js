import '../image.base';

let previous = null;
const threshold = 35;

self.start = function(imageData) {
  if (!previous) {
    previous = new Uint32Array(imageData.data.length);
  }
};

self.tick = function(px, index) {
  let oldPx = self.bytes2Pixel(previous[index]);
  previous[index] = self.pixel2Bytes(px);

  if (Math.abs(oldPx[0] - px[0]) < threshold) {
    px[0] = 0;
    px[1] = 0;
    px[2] = 0;
  }
};

self.end = function() {};
