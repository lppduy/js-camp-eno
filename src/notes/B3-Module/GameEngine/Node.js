export class Node {
  constructor() {
    this.children = [];
    this.position = { x: 0, y: 0 };
    this.width = 0;
    this.height = 0;
    this.scale = { x: 1, y: 1 };
    this.active = true;
    this.element = document.createElement('div');
  }

  addChild(child) {
    this.children.push(child);
    child.appendTo(this.element);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
      child.removeFromParent();
    }
  }

  setScale(scaleX, scaleY) {
    this.scale.x = scaleX;
    this.scale.y = scaleY;
  }

  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
    this.element.style.left = `${x}px`;
    this.element.style.top = `${y}px`;
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.element.style.width = `${width}px`; // Cập nhật chiều rộng
    this.element.style.height = `${height}px`; // Cập nhật chiều cao
  }

  setActive(isActive) {
    this.active = isActive;
  }

  appendTo(parent) {
    parent.appendChild(this.element); // Thêm element của Node vào parent
  }

  removeFromParent() {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element); // Gỡ Node khỏi parent
    }
  }
}
