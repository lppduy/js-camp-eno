// let lastTime;
// let isUpdating = false;

// function gameLoop(timeStamp) {
//   lastTime = lastTime || timeStamp;
//   let dt = timeStamp - lastTime;
//   update(dt);
//   window.requestAnimationFrame(gameLoop);
// }
// window.requestAnimationFrame(gameLoop);

// class Node {
//   constructor() {
//     this._scaleX = 1;
//   }
//   get scaleX() {
//     return this._scaleX;
//   }
//   set scaleX(value) {
//     this._scaleX = value;
//     this.element.style.transform = `scaleX(${this._scaleX})`;
//   }
// }

// const card = new Node();
// card.scaleX = 0.9;
// card.scaleX = 0.8;
// card.scaleX = 0.1;
// // (dt/1000) => 0.017s => = dt/duration * orgScaleX
// // duration: 1 -> 0

// function update(dt) {
//   // 16.6ms
//   if (!isUpdating) return;
// }

// let lastTime;
// let isUpdating = false;

// function gameLoop(timeStamp) {
//   lastTime = lastTime || timeStamp;
//   let dt = timeStamp - lastTime;
//   update(dt);
//   window.requestAnimationFrame(gameLoop);
// }
// window.requestAnimationFrame(gameLoop);

// class Node {
//   constructor() {
//     this._scaleX = 1;
//     this.element = document.createElement('div'); // Tạo phần tử DOM cho Node
//     this.element.style.height = '128px';
//     this.element.style.width = '90px';
//     document.body.appendChild(this.element); // Thêm Node vào body hoặc một phần tử khác trong DOM
//   }
//   get scaleX() {
//     return this._scaleX;
//   }
//   set scaleX(value) {
//     this._scaleX = value;
//     this.element.style.transform = `scaleX(${this._scaleX})`;
//   }
// }

// const card = new Node();
// card.scaleX = 0.9;

// function update(dt) {
//   const duration = 1000; // Thời gian cần để thay đổi từ 0.9 đến 0.1, tính bằng mili-giây
//   const startScaleX = 0.9;
//   const endScaleX = 0.1;

//   let startTime;
//   isUpdating = true;

//   function updateStep(timestamp) {
//     startTime = startTime || timestamp;
//     let progress = timestamp - startTime;
//     let scaleProgress = progress / duration;

//     if (scaleProgress < 1) {
//       card.scaleX = endScaleX + (startScaleX - endScaleX) * (1 - scaleProgress);
//       window.requestAnimationFrame(updateStep);
//     } else {
//       card.scaleX = endScaleX;
//       isUpdating = false;
//     }
//   }

//   window.requestAnimationFrame(updateStep);
// }

// // Gọi hàm update để cập nhật từ 0.9 đến 0.1
// update();
let lastTime;
let isUpdating = false;

function gameLoop(timeStamp) {
  lastTime = lastTime || timeStamp;
  let dt = timeStamp - lastTime;
  update(dt);
  window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);

class Node {
  constructor() {
    this._scaleX = 1;
    this.element = document.createElement('div'); // Tạo phần tử DOM cho Node
    this.element.style.height = '128px';
    this.element.style.width = '90px';
    const board = document.querySelector('.board'); // Lấy phần tử board từ HTML
    board.appendChild(this.element); // Thêm Node vào phần tử board trong DOM
  }
  get scaleX() {
    return this._scaleX;
  }
  set scaleX(value) {
    this._scaleX = value;
    this.element.style.transform = `scaleX(${this._scaleX})`;
  }
}

const card = new Node();
card.scaleX = 0.9;

function update(dt) {
  const duration = 1000; // Thời gian cần để thay đổi từ 0.9 đến 0.1, tính bằng mili-giây
  const startScaleX = 0.9;
  const endScaleX = 0.1;

  let startTime;
  isUpdating = true;

  function updateStep(timestamp) {
    startTime = startTime || timestamp;
    let progress = timestamp - startTime;
    let scaleProgress = progress / duration;

    if (scaleProgress < 1) {
      card.scaleX = endScaleX + (startScaleX - endScaleX) * (1 - scaleProgress);
      window.requestAnimationFrame(updateStep);
    } else {
      card.scaleX = endScaleX;
      isUpdating = false;
    }
  }

  window.requestAnimationFrame(updateStep);
}

// Gọi hàm update để cập nhật từ 0.9 đến 0.1
update();
