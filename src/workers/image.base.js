import './pipeline.base';

self.process = function([imageData]) {
  const data = new Uint32Array(imageData.data.buffer);
  self.start(imageData);
  for (let i = data.length; i >= 0; i--) {
    let px = self.bytes2Pixel(data[i]);
    self.tick(px, i);
    data[i] = self.pixel2Bytes(px);
  }
  self.end(imageData);
  return imageData;
};

self.pixel2Bytes = function(px) {
  return (
    (px[3] << 24) | // Alpha
    (px[2] << 16) | // Blue
    (px[1] << 8) | // Green
    px[0] // Red
  );
};

self.bytes2Pixel = function(current) {
  return [
    (current >> 0) & 0xff,
    (current >> 8) & 0xff,
    (current >> 16) & 0xff,
    (current >> 24) & 0xff
  ];
};

self.clearPixel = function(px) {
  px[0] = 0;
  px[1] = 0;
  px[2] = 0;
};

self.start = function() {};
self.tick = function() {};
self.end = function() {};
