import { Node } from './engine/Node.js';
import { Card } from './Card.js';

export class Board extends Node {
  constructor(rows, columns, cardSet) {
    super();
    this._rows = rows;
    this._columns = columns;
    this._cardSet = cardSet;
    this._board = [];

    this.createBoard();
  }

  createBoard() {
    for (let r = 0; r < this._rows; r++) {
      const row = [];

      for (let c = 0; c < this._columns; c++) {
        const index = r * this._columns + c;
        const card = new Card(index, this._cardSet[index]);

        const offsetX = c * parseInt(Card.Width);
        const offsetY = r * parseInt(Card.Height);

        card.id = `${r.toString()}-${c.toString()}`;
        card.x = offsetX;
        card.y = offsetY;

        row.push(card);
        this.addChild(card);
      }

      this._board.push(row);
    }
  }
}
