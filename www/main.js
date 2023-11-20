const card = document.createElement('div');
card.style.height = '128px';
card.style.width = '90px';
const cardImg = document.createElement('img');

cardImg.src = './darkness.jpg';

cardImg.style.height = '128px';
cardImg.style.width = '90px';
cardImg.style.display = 'block'; // Bắt đầu hiển thị hình ảnh ban đầu

card.appendChild(cardImg);

const board = document.querySelector('.board');
board.append(card);

let isFlipping = false;
let flipStartTime;
let flipCount = 0;
let isBackImage = true;

function flipCard(timestamp) {
  if (!isFlipping && flipCount < 1) {
    flipCount++;

    setTimeout(() => {
      return;
    }, 3000);
  }

  if (!isFlipping && flipCount === 1) {
    card.style.transform = 'scaleX(0)';
    isFlipping = true;
    flipStartTime = timestamp;
    flipCount++;
  }

  const delta = timestamp - flipStartTime;
  if (delta < 1000) {
    const scaleX = delta / 1000;
    card.style.transform = `scaleX(${scaleX})`;
    requestAnimationFrame(flipCard);
  } else {
    if (isBackImage) {
      cardImg.src = './back.jpg';
    } else {
      cardImg.src = './darkness.jpg';
    }
    card.style.transform = 'scaleX(1)';
    isFlipping = false;
    isBackImage = !isBackImage;
  }
}

function gameLoop(dt) {
  flipCard(dt);

  if (flipCount < 2) {
    requestAnimationFrame(gameLoop);
  }
}

requestAnimationFrame(gameLoop);
