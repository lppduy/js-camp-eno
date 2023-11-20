import { Node } from './engine/Node.js';
import { Sprite } from './engine/Sprite.js';

export class Card extends Node {
  static HEIGHT = '128px';
  static WIDTH = '90px';

  constructor(index, imageSrc) {
    super();
    this.index = index;
    this._sprite = new Sprite(imageSrc);
    this.addChild(this._sprite);
    this._cover = new Node();
    this.addChild(this._cover);
    this._active = true;

    this._sprite.element.style.height = Card.HEIGHT;
    this._sprite.element.style.width = Card.WIDTH;
  }

  get active() {
    return this._active;
  }

  set active(value) {
    this._active = value;
    this._sprite.element.style.display = value ? 'block' : 'none';
  }

  show(value) {
    this.active = value;
  }
}