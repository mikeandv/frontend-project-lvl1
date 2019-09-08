import { cons } from '@hexlet/pairs';
import gameLogic from '../core';
import {
  generateQuestions, getRandomNumInRange, getRandomNum, pow, gcd,
} from '../utils/questionsUtil';

const ruleText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 2) {
    return 'yes';
  }
  if (num % 2 === 0) {
    return 'no';
  }
  for (let i = 0; i < 20; i += 1) {
    const randomNum = getRandomNumInRange(2, num - 1);
    if (gcd(randomNum, num) > 1) {
      return 'no';
    }
    if (pow(randomNum, num - 1, num) !== 1) {
      return 'no';
    }
  }
  return 'yes';
};


const makeQuestion = () => {
  const number = getRandomNum(100);
  return cons(number, `${isPrime(number)}`);
};

export default (stagesCount) => {
  const questions = generateQuestions(stagesCount, makeQuestion);
  gameLogic(stagesCount, questions, ruleText);
};
