import { cons } from '@hexlet/pairs';
import runGame from '../core';
import getRandomInRange from '../utils/questionsUtil';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  const reminder = a % b;
  return reminder === 0 ? b : findGcd(b, reminder);
};

const makeTask = () => {
  const a = getRandomInRange(1, 100);
  const b = getRandomInRange(1, 100);
  const question = `${a} ${b}`;
  const answer = findGcd(a, b).toString();

  return cons(question, answer);
};

export default () => runGame(makeTask, gameDescription);
