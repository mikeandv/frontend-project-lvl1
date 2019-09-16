import { cons } from '@hexlet/pairs';
import gameLogic from '../core';
import { getRandomNum } from '../utils/questionsUtil';

const RULE_TEXT = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  const reminder = a % b;
  return reminder === 0 ? b : gcd(b, reminder);
};

const makeQuestion = () => {
  const a = getRandomNum(100);
  const b = getRandomNum(100);
  const question = `${a} ${b}`;

  return cons(question, `${gcd(a, b)}`);
};

export default () => gameLogic(makeQuestion, RULE_TEXT);
