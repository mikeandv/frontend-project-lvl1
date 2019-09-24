import readline from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const gameStagesCount = 3;

export default (makeTask, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log();
  const playerName = readline.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log();

  const runGame = (stage) => {
    if (stage === 0) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const task = makeTask();
    console.log(`Question: ${car(task)}`);
    const answer = readline.question('Your answer: ');

    if (cdr(task) !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${cdr(task)}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
    runGame(stage - 1);
  };
  runGame(gameStagesCount);
};
