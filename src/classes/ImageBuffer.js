const buffer = Symbol('buffer');

export default class ImageBuffer {
  constructor() {
    this[buffer] = new Uint32Array(0);
  }

  setBuffer(data) {
    this[buffer] = new Uint32Array(data);
  }

  doFilter(fn = empty, start = empty, end = empty) {
    const data = this[buffer],
      px = [0, 0, 0, 0];

    start();
    for (let i = data.length; i >= 0; i--) {
      px[3] = (data[i] >> 24) & 0xff; // alpha
      px[2] = (data[i] >> 16) & 0xff; // blue
      px[1] = (data[i] >> 8) & 0xff; // green
      px[0] = (data[i] >> 0) & 0xff; // red

      fn(px);

      data[i] =
        (px[3] << 24) | // Alpha
        (px[2] << 16) | // Blue
        (px[1] << 8) | // Green
        px[0]; // Red
    }
    end();
  }
}

function empty() {}
