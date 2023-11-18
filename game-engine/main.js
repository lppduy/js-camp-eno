import { Level } from './level';

class Game {
  constructor() {
    this.level = new Level();
    this.previousTime = new Date.now();

    this.run();
  }
  run() {
    let newTime = new Date.now();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Game();
});
