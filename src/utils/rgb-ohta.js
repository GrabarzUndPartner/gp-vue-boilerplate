export function rgb2ohta(rgb) {
  let r = rgb[0];
  let g = rgb[1];
  let b = rgb[2];

  let i1 = (r + g + b) / 3;
  let i2 = (r - b) / 2;
  let i3 = (2 * g - r - b) / 4;

  return [i1, i2, i3];
}
