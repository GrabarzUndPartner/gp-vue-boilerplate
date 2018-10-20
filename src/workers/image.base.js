import './pipeline.base';

self.process = function([imageData]) {
  const data = new Uint32Array(imageData.data.buffer),
    px = [0, 0, 0, 0];
  self.start(imageData);
  for (let i = data.length; i >= 0; i--) {
    const current = data[i];
    px[3] = (current >> 24) & 0xff; // alpha
    px[2] = (current >> 16) & 0xff; // blue
    px[1] = (current >> 8) & 0xff; // green
    px[0] = (current >> 0) & 0xff; // red

    self.tick(px, i);

    data[i] =
      (px[3] << 24) | // Alpha
      (px[2] << 16) | // Blue
      (px[1] << 8) | // Green
      px[0]; // Red
  }
  self.end(imageData);
  return imageData;
};

self.start = function() {};
self.tick = function() {};
self.end = function() {};
