import View from './view.js';
import Game from './game.js';

export default class App {
  constructor() {
    console.log('in app.js');
    const game = new Game();
    const view = new View(game);
  }
}
