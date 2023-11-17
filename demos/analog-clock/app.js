const bodyStyle = document.body.style;
bodyStyle.display = 'flex';
bodyStyle.justifyContent = 'center';
bodyStyle.alignItems = 'center';
bodyStyle.height = '100vh';

const clock = document.createElement('div');
const clockStyle = clock.style;
clockStyle.width = '500px';
clockStyle.height = '500px';
clockStyle.position = 'relative';
clockStyle.backgroundColor = 'lightgray';
clockStyle.borderRadius = '50%';
clockStyle.display = 'flex';
clockStyle.justifyContent = 'center';
clockStyle.alignItems = 'center';

for (let i = 0; i < 12; i++) {
  const number = document.createElement('div');

  number.innerHTML = `${i + 1}`;

  clock.appendChild(number);
}

document.body.appendChild(clock);
