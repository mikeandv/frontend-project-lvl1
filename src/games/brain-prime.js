import { cons } from '@hexlet/pairs';
import gameLogic from '../core';
import { getRandomNumInRange, getRandomNum } from '../utils/questionsUtil';

const RULE_TEXT = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const FERMA_TEST_REPEAT = 20;

const mul = (a, b, m) => {
  if (b === 1) {
    return a;
  }
  if (b % 2 === 0) {
    const t = mul(a, b / 2, m);
    return (2 * t) % m;
  }
  return (mul(a, b - 1, m) + a) % m;
};

const pow = (a, b, m) => {
  if (b === 0) {
    return 1;
  }
  if (b % 2 === 0) {
    const t = pow(a, b / 2, m);
    return mul(t, t, m) % m;
  }
  return (mul(pow(a, b - 1, m), a, m)) % m;
};

const gcd = (a, b) => {
  const reminder = a % b;
  return reminder === 0 ? b : gcd(b, reminder);
};

const testFerma = (repeats, num) => {
  if (repeats === 0) {
    return true;
  }
  const random = getRandomNumInRange(2, num - 1);
  return gcd(random, num) > 1
     || pow(random, num - 1, num) !== 1 ? false : testFerma(repeats - 1, num);
};

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  return testFerma(FERMA_TEST_REPEAT, num);
};

const makeQuestion = () => {
  const number = getRandomNum(100);
  return cons(number, isPrime(number) ? 'yes' : 'no');
};

export default () => gameLogic(makeQuestion, RULE_TEXT);
