import { cons } from '@hexlet/pairs';
import {
  l, cons as consList, head, tail, isEmpty, reverse,
} from '@hexlet/pairs-data';
import runGame from '../core';
import getRandomInRange from '../utils/questionsUtil';

const gameDescription = 'What number is missing in the progression?';
const progressionStepMin = 2;
const progressionStepMax = 10;
const progressionLength = 10;

const buildProgression = (length, progressionStep, first) => {
  const iter = (item, acc) => {
    if (item === 0) {
      return reverse(acc);
    }
    const nextElement = head(acc) + progressionStep;
    return iter(item - 1, consList(nextElement, acc));
  };
  return iter(length, consList(first, l()));
};

const makeQuestion = (progression, hidePosition) => {
  const iter = (list, counter) => {
    if (isEmpty(list)) {
      return '';
    }
    return `${counter === hidePosition ? '..' : head(list)} ${iter(tail(list), counter + 1)}`;
  };
  return iter(progression, 0);
};

const makeTask = () => {
  const firstMember = getRandomInRange(1, 100);
  const progressionStep = getRandomInRange(progressionStepMin, progressionStepMax);
  const hideElementPosition = getRandomInRange(0, progressionLength - 1);
  const progression = buildProgression(progressionLength - 1, progressionStep, firstMember);

  const question = makeQuestion(progression, hideElementPosition);
  const answer = (firstMember + (progressionStep * hideElementPosition)).toString();
  return cons(question, answer);
};

export default () => runGame(makeTask, gameDescription);
