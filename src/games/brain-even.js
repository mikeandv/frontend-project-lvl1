import { cons } from '@hexlet/pairs';
import gameLogic from '../core';
import generateQuestions from '../utils/questionsUtil';

const ruleText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const makeQuestion = () => {
  const number = Math.round(Math.random() * 100);
  return cons(number, isEven(number));
};

export default (stagesCount) => {
  const questions = generateQuestions(stagesCount, makeQuestion);
  gameLogic(stagesCount, questions, ruleText);
};