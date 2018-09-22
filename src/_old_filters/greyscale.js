export default function(source) {
  let data = new Uint32Array(source.buffer),
    a = 0,
    r = 0,
    g = 0,
    b = 0,
    v = 0;

  for (var i = source.length / 4; i >= 0; i--) {
    a = (data[i] >> 24) & 0xff; // alpha
    b = (data[i] >> 16) & 0xff; // blue
    g = (data[i] >> 8) & 0xff; // green
    r = (data[i] >> 0) & 0xff; // red

    v = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    data[i] =
      (a << 24) | // Alpha
      (v << 16) | // Blue
      (v << 8) | // Green
      v; // Red
  }

  return { data: source };
}
