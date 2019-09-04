import startEven from './games/brain-even';
import startCalc from './games/brain-calc';

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
    default:
  }
};
