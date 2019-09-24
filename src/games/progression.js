import { cons } from '@hexlet/pairs';
import {
  l, cons as consList, head, tail, isEmpty,
} from '@hexlet/pairs-data';
import runGameLogic from '../core';
import getRandomInRange from '../utils/questionsUtil';

const gameDescription = 'What number is missing in the progression?';
const progressionStepMin = 2;
const progressionStepMax = 10;
const progressionLength = 10;

const bildProgression = (length, progressionStep, first) => {
  const iter = (item, acc) => {
    if (item === 0) {
      return acc;
    }
    const nextElement = head(acc) + progressionStep;
    return iter(item - 1, consList(nextElement, acc));
  };
  return iter(length, consList(first, l()));
};

const getHidenElement = (progression, hidePosition) => {
  const loop = (list, counter) => {
    if (counter === hidePosition) {
      return head(list);
    }
    return loop(tail(list), counter + 1);
  };
  return loop(progression, 0);
};

const hideProgressionElement = (progression, hidePosition) => {
  const loop = (list, counter) => {
    if (isEmpty(list)) {
      return '';
    }
    return `${loop(tail(list), counter + 1)} ${counter === hidePosition ? '..' : head(list)}`;
  };
  return loop(progression, 0);
};

const makeTask = () => {
  const firstMember = getRandomInRange(1, 100);
  const depth = getRandomInRange(progressionStepMin, progressionStepMax);
  const hidePosition = getRandomInRange(0, progressionLength - 1);
  const progression = bildProgression(progressionLength - 1, depth, firstMember);

  const question = hideProgressionElement(progression, hidePosition);
  const answer = `${getHidenElement(progression, hidePosition)}`;
  return cons(question, answer);
};

export default () => runGameLogic(makeTask, gameDescription);
