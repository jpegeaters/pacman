import { Game } from './Game';
import { action } from 'mobx';
import sound from '../resources/sfx/eat-fruit.mp3';
import { getSoundPlay } from './getSoundPlay';

export const ENERGIZER_POINTS = 30;

export const eatEnergizer = action((game: Game) => {
  game.score += ENERGIZER_POINTS;
  game.killedGhosts = 0;
  game.pacMan.send('ENERGIZER_EATEN');
  getSoundPlay(sound, game);
  for (const ghost of game.ghosts) {
    ghost.send('ENERGIZER_EATEN');
  }
});
