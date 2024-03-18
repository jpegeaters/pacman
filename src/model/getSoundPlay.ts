import { Game } from './Game';

export const getSoundPlay = (url: string, game: Game, volume = 0.5) => {
  if (game.gameStarted && !game.isMuted) {
    const sound = new Audio(url);
    sound.play();
    sound.volume = volume;
  }
};
