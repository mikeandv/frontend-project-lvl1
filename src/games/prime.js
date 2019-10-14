import { cons } from '@hexlet/pairs';
import { modPow, gcd as findGcd } from 'bigint-mod-arith';
import runGame from '../core';
import getRandomInRange from '../utils/questionsUtil';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const testFerma = (num, repeatsCount = 20) => {
  if (repeatsCount === 0) {
    return true;
  }
  const random = getRandomInRange(2, num - 1);
  return Number(findGcd(random, num)) > 1
     || Number(modPow(random, num - 1, num)) !== 1 ? false : testFerma(num, repeatsCount - 1);
};

const isPrime = (num) => {
  if (num <= 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  return testFerma(num);
};

const makeTask = () => {
  const question = getRandomInRange(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => runGame(makeTask, gameDescription);
