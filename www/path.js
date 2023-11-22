const path = require('path');

const testPath = 'abcd/xyz/main.js';

// basename()
const base1 = path.basename(testPath);
const base2 = path.basename(testPath, '.js');

console.log(base1);
console.log(base2);

// extname()
const ext = path.extname(testPath);
console.log(ext);

// dirname()
const dir = path.dirname(testPath);
console.log(dir);

// join()
const myPath = path.join('game', 'cocos', 'learn.js');
console.log(myPath);

// resolve()
const myPath2 = path.resolve('game', 'cocos', 'lean.js');
console.log(myPath2);
// /Users/phuongduy/Desktop/js-camp-eno/www/game/cocos/lean.js

// __dirname - absolute
console.log(__dirname);

// __filename - absolute
console.log(__filename);
