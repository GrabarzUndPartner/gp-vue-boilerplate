import { fromEvent } from 'rxjs';
export default class Workers {
  constructor() {
    this.constructorList = new Map();
    this.instanceList = new Map();
  }

  get (name) {
    if (!this.constructorList.has(name)) {
      this.add(name, loadWorker(name));
    }
    return this.constructorList.get(name);
  }

  add (name, worker) {
    this.constructorList.set(name, worker);
  }

  getInstance (name) {
    if (!this.instanceList.has(name)) {
      this.instanceList.set(name, []);
    }
    const instances = this.instanceList.get(name);
    if (!instances.length) {
      return createInstance(this.get(name))
        .then((instance) => {
          instance.finish.subscribe((e) => {
            this.addInstance(name, Promise.resolve(instance));
            instance.resolve(e.data);
          });
          return instance;
        }).catch((e) => {
          console.error(e);
        });
    } else {
      return instances.pop();
    }
  }

  addInstance (name, instance) {
    this.instanceList.get(name).push(instance);
  }
}

function loadWorker (name) {
  return import(`@/worker/${name}.worker.js`)
    .then(Worker => Worker.default);
}

function createInstance (constructor) {
  return constructor
    .then(Worker => {
      const worker = new Worker();
      worker.finish = fromEvent(worker, 'message');
      return worker;
    }).catch((e) => {
      console.error(e);
    });
}

