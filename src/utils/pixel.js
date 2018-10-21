export function pixel2Bytes(px) {
  return (
    (px[3] << 24) | // Alpha
    (px[2] << 16) | // Blue
    (px[1] << 8) | // Green
    px[0] // Red
  );
}

export function bytes2Pixel(current) {
  return [
    (current >> 0) & 0xff,
    (current >> 8) & 0xff,
    (current >> 16) & 0xff,
    (current >> 24) & 0xff
  ];
}
