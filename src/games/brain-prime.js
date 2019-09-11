import { cons } from '@hexlet/pairs';
import gameLogic from '../core';
import {
  getRandomNumInRange, getRandomNum, pow, gcd,
} from '../utils/questionsUtil';

const ruleText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const FERMA_TEST_REPEAT = 20;

const testFerma = (repeats, num) => {
  if (repeats === 0) {
    return 'yes';
  }
  const randomNum = getRandomNumInRange(2, num - 1);
  return gcd(randomNum, num) > 1 || pow(randomNum, num - 1, num) !== 1 ? 'no' : testFerma(repeats - 1, num);
};

const isPrime = (num) => {
  if (num % 2 === 0) {
    return 'no';
  }
  if (num === 2) {
    return 'yes';
  }
  return testFerma(FERMA_TEST_REPEAT, num);
};

const makeQuestion = () => {
  const number = getRandomNum(100);
  return cons(number, `${number === 2 ? 'yes' : isPrime(number)}`);
};

export default (stagesCount) => gameLogic(stagesCount, makeQuestion, ruleText);
