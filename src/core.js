import readline from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const GAME_STAGES = 3;

export default (questionMake, gameRules) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRules);
  console.log();
  const playerName = readline.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log();

  const gameLoop = (stage) => {
    if (stage === 0) {
      console.log(`Congratulations, ${playerName}!`);
      return null;
    }

    const question = questionMake();
    console.log(`Question: ${car(question)}`);
    const answer = readline.question('Your answer: ');

    if (cdr(question) !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${cdr(question)}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return null;
    }
    console.log('Correct!');

    return gameLoop(stage - 1);
  };
  gameLoop(GAME_STAGES);
};
