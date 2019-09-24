import { cons } from '@hexlet/pairs';
import { l, random } from '@hexlet/pairs-data';
import runGameLogic from '../core';
import getRandomInRange from '../utils/questionsUtil';

const gameDescription = 'What is the result of the expression?';
const operations = l('+', '-', '*');

const getResult = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const makeTask = () => {
  const a = getRandomInRange(1, 100);
  const b = getRandomInRange(1, 100);
  const operation = random(operations);

  const question = `${a} ${operation} ${b}`;
  const answer = `${getResult(a, b, operation)}`;
  return cons(question, answer);
};

export default () => runGameLogic(makeTask, gameDescription);
