import { ScreenCoordinates, tileFromScreen } from './Coordinates';
import { Game } from './Game';
import { movePacManBy } from './movePacManBy';
import { PacMan } from './PacMan';
import { MilliSeconds } from './Types';
import {
  directionToVector as directionAsVector,
  isTileCenter,
  isWayFreeInDirection,
} from './Ways';
import { TotalPacManDyingAnimationLength } from './pacManDyingPhase';

export const DELAY_TO_REVIVE_PAC_MAN: MilliSeconds = TotalPacManDyingAnimationLength;

export const updatePacMan = (game: Game): void => {
  const pacMan = game.pacMan;
  if (pacMan.alive) {
    updateLivingPacMan(pacMan);
  } else {
    updateDeadPacMan(pacMan);
  }
};

const updateLivingPacMan = (pacMan: PacMan) => {
  if (isTileCenter(pacMan.screenCoordinates)) {
    const tile = tileFromScreen(pacMan.screenCoordinates);

    // Change direction if necessary
    if (
      pacMan.direction !== pacMan.nextDirection &&
      isWayFreeInDirection(tile, pacMan.nextDirection)
    ) {
      pacMan.direction = pacMan.nextDirection;
    }

    // Move
    if (isWayFreeInDirection(tile, pacMan.direction)) {
      movePacMan(pacMan);
    }
  } else {
    movePacMan(pacMan);
  }
};

const movePacMan = (pacMan: PacMan): void => {
  const gameSpeed = pacMan.game.speed;
  const speed = getPacManSpeed(gameSpeed);
  const delta: ScreenCoordinates = directionAsVector(pacMan.direction, speed);
  movePacManBy(pacMan, delta);
};

const getPacManSpeed = (gameSpeed: number) => {
  switch (gameSpeed) {
    case 0.5:
      return 1;
    case 1:
      return 2;
    case 2:
      return 4;
    default:
      return gameSpeed;
  }
};

const updateDeadPacMan = (pacMan: PacMan) => {
  if (pacMan.timeSinceDeath >= TotalPacManDyingAnimationLength) {
    revivePacMan(pacMan);
  }
  return;
};

const revivePacMan = (pacMan: PacMan) => {
  if (pacMan.extraLivesLeft > 0) {
    pacMan.extraLivesLeft -= 1;
    pacMan.game.revivePacMan();
  }
};
