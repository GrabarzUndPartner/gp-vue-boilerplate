import './base';

let value = 0;
self.tick = function(px) {
  value = 0.2126 * px[0] + 0.7152 * px[1] + 0.0722 * px[2];
  px[0] = value;
  px[1] = value;
  px[2] = value;
};
