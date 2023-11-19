import { Game } from './Game.js';

const cardList = [
  'darkness',
  'double',
  'fairy',
  'fighting',
  'fire',
  'grass',
  'lightning',
  'metal',
  'psychic',
  'water',
];

const game = new Game(4, 5, cardList);

window.addEventListener('DOMContentLoaded', function () {
  game.initialize('game-container');
});

document.getElementById('game-container').addEventListener('click', function (event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains('card')) {
    game.handleSelectCard(clickedElement);
  }
});
