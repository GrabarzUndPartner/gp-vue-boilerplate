
export default class Queue {
  constructor() {
    this.list = [];
  }

  add (task) {
    this.list.push(task);
  }

  next () {
    return gen(this.list).next();
  }
}

function* gen (list) {
  while (list.length) {
    yield list.sort(function (a, b) {
      if (a.priority < b.priority) {
        return -1;
      } else {
        return +1;
      }
    }).shift();
  }

}
