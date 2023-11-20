const obj1 = {
  name: 'duy',
  age: 26,
};

Object.freeze(obj1);
console.log(obj1);
obj1.age = 28;
console.log(obj1);
