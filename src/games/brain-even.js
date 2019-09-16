import { cons } from '@hexlet/pairs';
import gameLogic from '../core';
import { getRandomNum } from '../utils/questionsUtil';

const RULE_TEXT = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const makeQuestion = () => {
  const number = getRandomNum(100);
  return cons(number, isEven(number) ? 'yes' : 'no');
};

export default () => gameLogic(makeQuestion, RULE_TEXT);
