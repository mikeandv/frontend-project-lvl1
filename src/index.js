import startEven from './games/brain-even';
import startCalc from './games/brain-calc';
import startGcd from './games/brain-gcd';
import startProgression from './games/brain-progression';
import startPrime from './games/brain-prime';

const GAME_STAGES = 3;

export default (game) => {
  switch (game) {
    case 'brain-games':
      break;
    case 'brain-even':
      startEven(GAME_STAGES);
      break;
    case 'brain-calc':
      startCalc(GAME_STAGES);
      break;
    case 'brain-gcd':
      startGcd(GAME_STAGES);
      break;
    case 'brain-progression':
      startProgression(GAME_STAGES);
      break;
    case 'brain-prime':
      startPrime(GAME_STAGES);
      break;
    default:
  }
};
