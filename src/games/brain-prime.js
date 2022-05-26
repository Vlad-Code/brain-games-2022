import engine from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isPrime = () => {
  const number = getRandomInt(2, 1000);
  const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const question = `Question: ${number}`;
  let rightAnswer = 'yes';
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      rightAnswer = 'no';
      break;
    }
  }
  return [mainQuestion, question, rightAnswer];
};

export default () => engine(isPrime);
