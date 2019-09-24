import { cons } from '@hexlet/pairs';
import { modPow, gcd as findGcd } from 'bigint-mod-arith';
import runGameLogic from '../core';
import getRandomInRange from '../utils/questionsUtil';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const fermaTestRepeatsCount = 20;

const checkFermaTest = (repeatsCount, num) => {
  if (repeatsCount === 0) {
    return true;
  }
  const random = getRandomInRange(2, num - 1);
  return Number(findGcd(random, num)) > 1
     || Number(modPow(random, num - 1, num)) !== 1 ? false : checkFermaTest(repeatsCount - 1, num);
};

const isPrime = (num) => {
  if (num <= 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  return checkFermaTest(fermaTestRepeatsCount, num);
};

const makeTask = () => {
  const number = getRandomInRange(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return cons(number, answer);
};


export default () => runGameLogic(makeTask, gameDescription);
