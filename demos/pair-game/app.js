const canvas = document.createElement('div');
canvas.style.display = 'flex';
canvas.style.flexDirection = 'column';
canvas.style.justifyContent = 'center';
canvas.style.alignItems = 'center';
canvas.style.gap = '2px';
canvas.style.position = 'absolute';
canvas.style.top = '50%';
canvas.style.left = '50%';
canvas.style.transform = 'translate(-50%, -50%)';
canvas.style.height = 'auto';

for (let i = 0; i < 3; i++) {
  const boxRow = document.createElement('div');
  boxRow.style.display = 'flex';
  boxRow.style.gap = '2px';

  for (let j = 0; j < 5; j++) {
    const box = document.createElement('div');
    box.style.width = '200px';
    box.style.height = '200px';
    box.style.backgroundColor = 'tomato';
    box.style.border = '1px solid black';
    boxRow.appendChild(box);
  }

  canvas.appendChild(boxRow);
}

document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.position = 'relative';
document.body.appendChild(canvas);
