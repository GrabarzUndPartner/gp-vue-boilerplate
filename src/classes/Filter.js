import { fromEvent } from 'rxjs';

const worker = Symbol('worker');
const buffer = Symbol('worker');

export default class Filter {
  constructor(name) {
    this[buffer] = null;
    this[worker] = { postMessage: function() {} };

    import('../workers/filter/' + name + '.worker.js').then(Worker => {
      this[worker] = new Worker();
      fromEvent(this[worker], 'message').subscribe(e => {
        this[buffer].data.set(e.data);
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
    this[worker].postMessage(data);
  }
}
