import { cons } from '@hexlet/pairs';
import {
  l, head, tail, length,
} from '@hexlet/pairs-data';
import gameLogic from '../core';
import { getRandomNum, getRandomNumInRange } from '../utils/questionsUtil';

const RULE_TEXT = 'What is the result of the expression?';
const OPERATOR_LIST = l('+', '-', '*');

const getRandomOperator = (list) => {
  const number = getRandomNumInRange(0, length(list)) - 1;
  const loop = (counter, item) => {
    if (counter === number) {
      return head(item);
    }
    return loop(counter + 1, tail(list));
  };
  return loop(0, list);
};

const getResult = (a, operation, b) => {
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

const makeQuestion = () => {
  const a = getRandomNum(100);
  const b = getRandomNum(100);
  const operation = getRandomOperator(OPERATOR_LIST);

  const question = `${a} ${operation} ${b}`;
  return cons(question, `${getResult(a, operation, b)}`);
};

export default () => gameLogic(makeQuestion, RULE_TEXT);
