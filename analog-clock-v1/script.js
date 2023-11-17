const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');
const digitalElement = document.getElementById('digital');

function clockTick() {
  const date = new Date();

  const seconds = date.getSeconds() / 60;

  const minutes = (date.getMinutes() + seconds) / 60;

  const hours = (date.getHours() + minutes) / 12;

  rotateClockHand(secondHand, seconds);
  rotateClockHand(minuteHand, minutes);
  rotateClockHand(hourHand, hours);

  const digitalSec = formatDigital(date.getSeconds());
  const digitalMin = formatDigital(date.getMinutes());
  const digitalHour = formatDigital(date.getHours());

  digitalElement.innerHTML = `${digitalHour}:${digitalMin}:${digitalSec}`;
}

function rotateClockHand(el, rotation) {
  el.style.setProperty('--rotate', rotation * 360);
}
function formatDigital(time) {
  return time < 10 ? `0${time}` : time;
}

// Gọi hàm cập nhật mỗi giây
setInterval(clockTick, 1000);
