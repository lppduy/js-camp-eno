import { Board } from './Board.js';

export class Game {
  constructor(rows, columns, cardList) {
    this.rows = rows;
    this.columns = columns;
    this.cardList = cardList;
    this.cardSet = this.shuffleCards();
    this.board = new Board(this.rows, this.columns, this.cardSet);
    this.coin = 10000;
    this.matchPairs = 0;
    this.cardOneSelected = null;
    this.cardTwoSelected = null;

    this.coinElement = document.getElementById('coin');

    this.initialize();
  }

  shuffleCards() {
    let cardSet = this.cardList.concat(this.cardList);

    for (let i = 0; i < cardSet.length; i++) {
      let j = Math.floor(Math.random() * cardSet.length);

      let temp = cardSet[i];
      cardSet[i] = cardSet[j];
      cardSet[j] = temp;
    }

    return cardSet;
  }

  initialize() {
    this.updateCoinCount();
    this.renderBoard('game-container');
  }

  renderBoard(containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
      console.error(`Container element with ID ${containerId} not found.`);
      return;
    }

    container.innerHTML = '';
    container.appendChild(this.coinElement);
    container.appendChild(this.board.element);
  }

  updateCoinCount() {
    this.coinElement.innerHTML = `${this.coin}`;
  }

  handleSelectCard(card) {
    if (card.element.src.includes('back')) {
      if (!this.cardOneSelected) {
        this.cardOneSelected = card;

        this.revealCard(this.cardOneSelected);
      } else if (!this.cardTwoSelected && card !== this.cardOneSelected) {
        this.cardTwoSelected = card;

        this.revealCard(this.cardTwoSelected);

        setTimeout(() => this.checkWin(), 800);
      }
    }
  }

  revealCard(card) {
    const coords = card.element.id.split('-');
    const r = parseInt(coords[0]);
    const c = parseInt(coords[1]);
    card.element.src = this.getSrc(this.board.board[r][c]);
  }

  checkWin() {
    if (
      this.cardOneSelected.element.src === this.cardTwoSelected.element.src &&
      this.cardOneSelected.element.id !== this.cardTwoSelected.element.id
    ) {
      this.coin += 1000;
      this.matchPairs++;
      this.cardOneSelected.hide();
      this.cardTwoSelected.hide();
    } else {
      this.coin -= 500;
      this.cardOneSelected.element.src = this.getSrc('back');
      this.cardTwoSelected.element.src = this.getSrc('back');
    }

    if (this.coin < 0) {
      alert('Game Over! You ran out of coins.');
    }

    if (this.matchPairs === 10) {
      alert('Congratulations! You won!');
    }

    this.cardOneSelected = null;
    this.cardTwoSelected = null;
    this.updateCoinCount();
  }

  getSrc(name) {
    return `./assets/${name.toString()}.jpg`;
  }
}
