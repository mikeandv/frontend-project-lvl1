import { l, cons as consList } from '@hexlet/pairs-data';

export default (stagesCount, makeQ) => {
  const iter = (item, acc) => {
    if (item === 0) {
      return acc;
    }
    const tmp5 = makeQ();
    return iter(item - 1, consList(tmp5, acc));
  };

  return iter(stagesCount, l());
};
