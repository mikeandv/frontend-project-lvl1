import { cons } from '@hexlet/pairs';
import {
  l, cons as consList, head, tail, isEmpty,
} from '@hexlet/pairs-data';
import gameLogic from '../core';
import { generateQuestions, randomNum, randomNumInRange } from '../utils/questionsUtil';

const ruleText = 'What number is missing in the progression?';
const MIN = 2;
const MAX = 10;
const LENGTH = 10;

const bildProgression = (len, depth, first) => {
  const iter = (item, acc) => {
    if (item === 1) {
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
      return `${head(list)}`;
    }
    return loop(tail(list), counter + 1);
  };
  return loop(progression, 1);
};

const hideNumResult = (progression, hidePos) => {
  const loop = (list, counter) => {
    if (isEmpty(list)) {
      return '';
    }
    return `${loop(tail(list), counter + 1)} ${counter === hidePos ? '..' : head(list)}`;
  };
  return loop(progression, 1);
};

const makeQuestion = () => {
  const firstMember = randomNum(100);
  const depth = randomNumInRange(MIN, MAX);
  const hidePosition = randomNumInRange(1, LENGTH);
  const progression = bildProgression(LENGTH, depth, firstMember);
  return cons(hideNumResult(progression, hidePosition), getHideNum(progression, hidePosition));
};

export default (stagesCount) => {
  const questions = generateQuestions(stagesCount, makeQuestion);
  gameLogic(stagesCount, questions, ruleText);
};
