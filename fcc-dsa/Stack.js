function isPalindrome(word) {
  let letters = [];
  let reversedWord = '';

  for (let i = 0; i < word.length; i++) letters.push(word[i]);

  for (let i = 0; i < word.length; i++) reversedWord += letters.pop();

  if (reversedWord === word) return true;

  return false;
}

class Stack {
  constructor() {
    this._count = 0;
    this._storage = [];
  }
  push(value) {
    this._storage[this._count] = value;
    this._count++;
  }
  pop() {
    if (this._count === 0) return undefined;
    this._count--;
    let result = this._storage[this._count];
    delete this._storage[this._count];
    return result;
  }
  size() {
    return this._count;
  }
  peek() {
    return this._storage(this._count - 1);
  }
}
