import { fromEvent } from 'rxjs';

const worker = Symbol('worker');
const buffer = Symbol('buffer');
const flag = Symbol('flag');

export default class Filter {
  constructor(name) {
    this[buffer] = null;
    this[worker] = { postMessage: function() {} };
    this[flag] = false;

    import('../workers/filter/' + name + '.worker.js').then(Worker => {
      this[worker] = new Worker();
      fromEvent(this[worker], 'message').subscribe(e => {
        this[buffer].data.set(e.data.data);
        this[flag] = false;
      });
    });
  }

  setBuffer(data) {
    this[buffer] = data;
  }

  getBuffer() {
    return this[buffer];
  }

  send(data) {
    if (!this[flag]) {
      this[worker].postMessage(data);
      this[flag] = true;
    }
  }
}
