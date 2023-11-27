class MySet {
  constructor() {
    this._collection = [];
  }
  has(element) {
    return this._collection.indexOf(element) !== -1;
  }
  values() {
    return this._collection;
  }
  add(element) {
    if (!this.has(element)) {
      this._collection.push(element);
      return true;
    }
    return false;
  }
  remove(element) {
    if (this.has(element)) {
      index = this._collection.indexOf(element);
      this._collection.splice(index, 1);
      return true;
    }
    return false;
  }
  size() {
    return this._collection.length;
  }
  union(otherSet) {
    let unionSet = new MySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(e => unionSet.add(e));
    secondSet.forEach(e => unionSet.add(e));
    return unionSet;
  }
  intersection(otherSet) {
    let intersectionSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach(e => {
      if (otherSet.has(e)) intersectionSet.add(e);
    });
    return intersectionSet;
  }
  difference(otherSet) {
    let differentSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach(e => {
      if (!otherSet.has(e)) differentSet.add(e);
    });
    return differentSet;
  }
  subset(otherSet) {
    let firstSet = this.values();
    return firstSet.every(value => otherSet.has(value));
  }
}
//https://www.youtube.com/playlist?list=PLWKjhJtqVAbkso-IbgiiP48n-O-JQA9PJ
