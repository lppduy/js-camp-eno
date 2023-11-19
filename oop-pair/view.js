export default class View {
  constructor(game) {
    console.log('in view.js');
    this.game = game;
    this.createGrid();
  }
  createGrid() {
    const gridElement = document.querySelector('.grid');
    const SIZE = this.game.getSize();

    for (let i = 0; i < SIZE; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', './assets/back.png');
      gridElement.append(card);
    }
  }
}
