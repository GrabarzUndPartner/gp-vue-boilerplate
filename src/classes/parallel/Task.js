export default class Task {
  constructor(name, data, priority = 2) {
    this.name = name;
    this.data = data;
    this.priority = priority;
  }
}
