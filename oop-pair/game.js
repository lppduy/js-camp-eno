import Board from './assets/board.js';

export default class Game {
  constructor() {
    this.board = new Board();
  }
  getSize() {
    return this.board.getSize();
  }
}
