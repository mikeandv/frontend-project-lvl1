import readline from 'readline-sync';

const greetings = () => {
  const playerName = readline.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  return playerName;
};

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const checkCorrectInput = (answer) => answer === 'yes' || answer === 'no';
const gameStage = 3;

const gameLogic = (stageCount, playerName) => {
  if (stageCount === 0) {
    console.log(`Congratulations, ${playerName}!`);
    return null;
  }
  const number = Math.round(Math.random() * 100);

  console.log(`Question: ${number}`);
  const correctAnswer = isEven(number);
  const answer = readline.question('Your answer: ');

  if (!checkCorrectInput(answer) || answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
    return null;
  }
  console.log('Correct!');
  return gameLogic(stageCount - 1, playerName);
};

const evenStart = () => {
  gameLogic(gameStage, greetings());
};

export { evenStart, greetings };
