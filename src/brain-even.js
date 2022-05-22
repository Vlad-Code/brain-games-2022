import readlineSync from 'readline-sync';

const divider = 2;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    const number = getRandomInt(1, 1000);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = number % divider === 0 ? 'yes' : 'no';
    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      return null;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return null;
};
