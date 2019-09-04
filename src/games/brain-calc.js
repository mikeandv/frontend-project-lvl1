import { cons } from '@hexlet/pairs';
import gameLogic from '../core';
import generateQuestions from '../utils/questionsUtil';

const ruleText = 'What is the result of the expression?';
const MIN = 1;
const MAX = 4;
const randomOperator = (min, max) => {
  const number = Math.floor(Math.random() * (max - min)) + min;
  switch (number) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return null;
  }
};

const expressionResult = (leftNum, operation, rightNum) => {
  switch (operation) {
    case '+':
      return `${leftNum + rightNum}`;
    case '-':
      return `${leftNum - rightNum}`;
    case '*':
      return `${leftNum * rightNum}`;
    default:
      return null;
  }
};

const makeQuestion = () => {
  const leftNum = Math.round(Math.random() * 100);
  const rightNum = Math.round(Math.random() * 100);
  const operation = randomOperator(MIN, MAX);

  const expression = `${leftNum} ${operation} ${rightNum}`;
  return cons(expression, expressionResult(leftNum, operation, rightNum));
};

export default (stagesCount) => {
  const questions = generateQuestions(stagesCount, makeQuestion);
  gameLogic(stagesCount, questions, ruleText);
};
