import readline from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { head, tail } from '@hexlet/pairs-data';

const greetings = (name) => {
  console.log(`Hello, ${name}!\n`);
};
const welcome = (gameRules) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRules);
  console.log();
};

export default (stageCount, questionList, gameRules) => {
  welcome(gameRules);
  const playerName = readline.question('May I have your name? ');
  greetings(playerName);

  const gameLoop = (stage, questions) => {
    if (stage === 0) {
      console.log(`Congratulations, ${playerName}!`);
      return null;
    }

    const question = head(questions);
    console.log(`Question: ${car(question)}`);
    const answer = readline.question('Your answer: ');

    if (cdr(question) !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${cdr(question)}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return null;
    }
    console.log('Correct!');

    return gameLoop(stage - 1, tail(questions));
  };
  return gameLoop(stageCount, questionList);
};
