const countdown1 = n => {
  if (n < 0) {
    console.log('Invalid input.');
  }

  for (let i = n; i >= 0; i--) {
    setTimeout(() => {
      console.log(i);
    }, (n - i) * 1000);
  }
};

const countdown2 = n => {
  if (n < 0) {
    console.log('Invalid input.');
  }

  const count = setInterval(() => {
    if (n === 0) clearInterval(count);
    console.log(n);
    n--;
  }, 1000);
};

// closure -> ứng dụng để đóng gói module lại

// context - what is this (keyword)

const nums = [23, 6346, 43, 7878, 3];

const maxNum = arr => Math.max.apply(null, arr);
const maxMum2 = arr => arr.sort((a, b) => b - a)[0];
const maxMum3 = arr => Math.max(...arr);

// bind
// mỗi lần dùng bind tạo ra func mới => phải lưu lại

// arrow func:
// - ko co this cua chinh no - ko dung call bind apply, ko dung nhuw constructor - ko dung obj methods
// - oop -> this: class

// cocos => 2.1.3 3x => cả js và ts

// const cover = document.createElement('div');

// cover.style.width = '200px';
// cover.style.height = '200px';
// cover.style.backgroundColor = 'tomato';
// cover.style.border = '1px solid blue';

// cover.innerHTML = '1';

// document.body.appendChild(cover);
