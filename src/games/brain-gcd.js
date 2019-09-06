import { cons } from '@hexlet/pairs';
import gameLogic from '../core';
import generateQuestions from '../utils/questionsUtil';

const ruleText = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  const reminder = a % b;
  return `${reminder === 0 ? b : gcd(b, reminder)}`;
};

const makeQuestion = () => {
  const numOne = Math.round(Math.random() * 100);
  const numTwo = Math.round(Math.random() * 100);
  const pairNums = `${numOne} ${numTwo}`;

  return cons(pairNums, gcd(numOne, numTwo));
};

export default (stagesCount) => {
  const questions = generateQuestions(stagesCount, makeQuestion);
  gameLogic(stagesCount, questions, ruleText);
};
