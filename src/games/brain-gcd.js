import { cons } from '@hexlet/pairs';
import gameLogic from '../core';
import { getRandomNum, gcd } from '../utils/questionsUtil';

const ruleText = 'Find the greatest common divisor of given numbers.';

const makeQuestion = () => {
  const numOne = getRandomNum(100);
  const numTwo = getRandomNum(100);
  const pairNums = `${numOne} ${numTwo}`;

  return cons(pairNums, `${gcd(numOne, numTwo)}`);
};

export default (stagesCount) => gameLogic(stagesCount, makeQuestion, ruleText);
