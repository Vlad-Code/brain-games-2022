import engine from '../index.js';

const divider = 2;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const brainEven = () => {
  const number = getRandomInt(1, 1000);
  const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = `Question: ${number}`;
  const rightAnswer = number % divider === 0 ? 'yes' : 'no';
  return [mainQuestion, question, rightAnswer];
};

export default () => engine(brainEven);
