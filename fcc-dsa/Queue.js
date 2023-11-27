class Queue {
  constructor() {
    this._collection = [];
  }
  print() {
    console.log(this._collection);
  }
  enqueue(ele) {
    this._collection.push(ele);
  }
  dequeue(ele) {
    return this._collection.shift();
  }
  front() {
    return this._collection[0];
  }
  size() {
    return this._collection.length;
  }
  isEmpty() {
    return this._collection.length === 0;
  }
}

module.exports = { Queue };
