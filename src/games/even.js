import { cons } from '@hexlet/pairs';
import runGameLogic from '../core';
import getRandomInRange from '../utils/questionsUtil';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const makeTask = () => {
  const question = getRandomInRange(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => runGameLogic(makeTask, gameDescription);
