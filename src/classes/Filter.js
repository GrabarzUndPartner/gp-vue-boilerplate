import WorkerPipeline from '../classes/WorkerPipeline';

const pipeline = Symbol('pipeline');
const buffer = Symbol('buffer');
const flag = Symbol('flag');

export default class Filter {
  constructor(name) {
    this[buffer] = null;
    this[flag] = false;
    this.updated = false;

    this[pipeline] = new WorkerPipeline(name);
    this[pipeline].subscribe(imageData => {
      this[buffer].data.set(imageData.data);
      this[flag] = false;
      this.updated = true;
    });
  }

  setBuffer(data) {
    this[buffer] = data;
    this.updated = true;
  }

  getBuffer() {
    this.updated = false;
    return this[buffer];
  }

  send(data) {
    if (!this[flag]) {
      this[pipeline].send(data);
      this[flag] = true;
    }
  }
}
