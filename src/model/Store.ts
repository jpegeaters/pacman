import { observable, action } from 'mobx';
import { Game } from './Game';
import { DebugState } from './DebugState';

export class Store {
  @observable
  game: Game = new Game(this);

  debugState = new DebugState(this);

  level = 1;

  @action.bound
  resetGame() {
    this.game = new Game(this);
    this.game.readyGameForPlay();
    this.game.gameStarted = true;
    this.setGameLevel();
  }
  @action.bound
  muteSounds() {
    this.game.muteGame();
  }
  @action.bound
  setGameLevel() {
    this.game.speed = this.level;
  }
}
