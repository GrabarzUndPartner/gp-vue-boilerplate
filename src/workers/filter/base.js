self.values = null;

function process(source) {
  const data = new Uint32Array(source.buffer),
    px = [0, 0, 0, 0];

  for (let i = data.length; i >= 0; i--) {
    px[3] = (data[i] >> 24) & 0xff; // alpha
    px[2] = (data[i] >> 16) & 0xff; // blue
    px[1] = (data[i] >> 8) & 0xff; // green
    px[0] = (data[i] >> 0) & 0xff; // red

    self.tick(px);

    data[i] =
      (px[3] << 24) | // Alpha
      (px[2] << 16) | // Blue
      (px[1] << 8) | // Green
      px[0]; // Red
  }
  return source;
}

self.addEventListener('message', e => {
  self.start();
  self.postMessage(process(e.data));
  self.end();
});

self.start = function() {};
self.tick = function() {};
self.end = function() {};
