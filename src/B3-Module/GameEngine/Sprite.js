export class Sprite extends Node {
  constructor(imageSrc) {
    super();
    this.imageSrc = imageSrc;
    this.element = document.createElement('img');
    this.element.src = this.imageSrc;
  }
}
