import { pixel2Bytes, bytes2Pixel } from '../utils/pixel';

export default class SmoothBuffer {
  constructor(size, length) {
    this.dataIndex = 0;
    this.data = new Array(size).fill(0).map(() => new Uint32Array(length));
  }

  get(index) {
    const buffer = this.data;
    const res = buffer.reduce(
      (res, b) => {
        let px = bytes2Pixel(b[index]);
        res[0] += px[0];
        res[1] += px[1];
        res[2] += px[2];
        return res;
      },
      [0, 0, 0]
    );

    res[0] /= buffer.length;
    res[1] /= buffer.length;
    res[2] /= buffer.length;
    return res;
  }

  set(px, index) {
    this.data[this.dataIndex][index] = pixel2Bytes(px);
  }

  increment() {
    this.dataIndex = (this.dataIndex + 1) % this.data.length;
  }
}
