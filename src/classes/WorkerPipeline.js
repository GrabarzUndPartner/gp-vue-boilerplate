import { fromEvent } from 'rxjs';

const io = Symbol('io');
const queue = Symbol('queue');
const sender = Symbol('sender');
const receiver = Symbol('receiver');

export default class WorkerPipeline {
  constructor(list) {
    this[queue] = loadWorkers(list);
    this[io] = this[queue].then(list => createPipeline(list));
    this[sender] = this[io].then(list => list[0].getPort());
    this[receiver] = this[io].then(list => list[1].getPort('sender'));
  }

  send(data, code = 'message') {
    this[sender].then(port => port.postMessage({ code: code, body: data }));
  }

  sendOptions(options) {
    this[queue].then(items => {
      items.filter(item => {
        if (options[item.name]) {
          item.worker.postMessage({
            code: 'options',
            body: options[item.name]
          });
        }
      });
    });
  }

  subscribe(fn) {
    this[receiver].then(port => {
      fromEvent(port, 'message').subscribe(e => fn(e.data.body));
      port.start();
    });
  }
}

function loadWorkers(workerRef) {
  console.log(workerRef);
  if (Array.isArray(workerRef)) {
    return Promise.all(workerRef.map(item => loadWorkers(item)));
  } else {
    return import('../workers/' + workerRef + '.worker.js').then(Worker => {
      let worker = new Worker();
      return {
        worker: worker,
        name: workerRef,
        getPort(code = 'receiver') {
          return registerWorkerPort(code, worker);
        }
      };
    });
  }
}

function createPipeline(list, before) {
  list.forEach(item => {
    before = connectWorkers(item, before);
  });
  return [list[0], list[list.length - 1]];
}

function connectWorkers(value, before = []) {
  if (Array.isArray(value)) {
    value.forEach(item => connectWorkers(item, before));
  } else {
    value = connectSenderToReceiver(before, value);
  }
  return value;
}

function connectSenderToReceiver(before, value) {
  before.forEach(item =>
    registerWorkerPort('sender', item.worker, value.getPort())
  );
  value.before = before;
  return [value];
}

function registerWorkerPort(code, worker, portA, portB = null) {
  let channel;
  if (!portA) {
    channel = new MessageChannel();
    portA = channel.port1;
    portB = channel.port2;
  }
  worker.postMessage({ code: code }, [portA]);
  return portB;
}
