import { cons } from '@hexlet/pairs';
import {
  l, cons as consList, head, tail, isEmpty,
} from '@hexlet/pairs-data';
import gameLogic from '../core';
import { getRandomNum, getRandomNumInRange } from '../utils/questionsUtil';

const RULE_TEXT = 'What number is missing in the progression?';
const MIN = 2;
const MAX = 10;
const LENGTH = 10;

const bildProgression = (len, depth, first) => {
  const iter = (item, acc) => {
    if (item === 0) {
      return acc;
    }
    const nextNum = head(acc) + depth;
    return iter(item - 1, consList(nextNum, acc));
  };
  return iter(len, consList(first, l()));
};

const getHideNum = (progression, hidePos) => {
  const loop = (list, counter) => {
    if (counter === hidePos) {
      return head(list);
    }
    return loop(tail(list), counter + 1);
  };
  return loop(progression, 0);
};

const hideNumResult = (progression, hidePos) => {
  const loop = (list, counter) => {
    if (isEmpty(list)) {
      return '';
    }
    return `${loop(tail(list), counter + 1)} ${counter === hidePos ? '..' : head(list)}`;
  };
  return loop(progression, 0);
};

const makeQuestion = () => {
  const firstMember = getRandomNum(100);
  const depth = getRandomNumInRange(MIN, MAX);
  const hidePosition = getRandomNumInRange(0, LENGTH - 1);
  const progression = bildProgression(LENGTH - 1, depth, firstMember);
  return cons(hideNumResult(progression, hidePosition), `${getHideNum(progression, hidePosition)}`);
};

export default () => gameLogic(makeQuestion, RULE_TEXT);
