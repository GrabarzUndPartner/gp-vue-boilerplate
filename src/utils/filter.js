export function createFilter(name) {
  return Promise.all([
    import('../filters/' + name),
    import('simple-web-worker')
  ])
    .then(([filter, worker]) => createWorker(worker, name, filter))
    .then(([setup, worker]) => getHandler(worker, name, setup));
}

function createWorker(worker, name, filter) {
  return [
    (filter.setup || function() {})(),
    worker.create([
      {
        message: name,
        func: filter.default
      }
    ])
  ];
}

function getHandler(worker, name, setup) {
  return function process(data, config) {
    console.log(setup);
    return worker.postMessage(name, [data, config]).catch(console.error);
  };
}
