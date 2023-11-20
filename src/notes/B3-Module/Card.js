import { Node } from './GameEngine/Node.js';
import { Sprite } from './GameEngine/Sprite.js';
import { Label } from './GameEngine/Label.js';

export class Card extends Node {
  constructor(id) {
    super();
    this.id = id;

    this.element = document.createElement('div');
    this.element.classList.add('card');
  }

  setSprite(imageSrc) {
    this.sprite = new Sprite(imageSrc);
    this.sprite.appendTo(this.element);
  }

  setLabel(textContent) {
    this.label = new Label(textContent);
    this.label.appendTo(this.element);
  }
}
