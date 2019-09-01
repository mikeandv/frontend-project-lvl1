import readline from 'readline-sync';

const greetings = () => {
  const playerName = readline.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
};

export default greetings;
