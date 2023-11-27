const { Queue } = require('./Queue.js');

class PriorityQueue extends Queue {
  constructor() {
    super();
  }
  enqueue(ele) {
    if (this.isEmpty()) {
      this._collection.push(ele);
      return;
    }
    let added = false;
    for (let i = 0; i < this._collection.length; i++) {
      if (ele[1] < this._collection[i][1]) {
        this._collection.splice(i, 0, ele);
        added = true;
        break;
      }
    }
    if (!added) this._collection.push(ele);
  }
  dequeue() {
    let value = this._collection.shift();
    return value[0];
  }
}
