import { cons } from '@hexlet/pairs';
import gameLogic from '../core';
import { getRandomNum } from '../utils/questionsUtil';

const ruleText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const makeQuestion = () => {
  const number = getRandomNum(100);
  return cons(number, isEven(number));
};

export default (stagesCount) => gameLogic(stagesCount, makeQuestion, ruleText);
