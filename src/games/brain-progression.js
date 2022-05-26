import engine from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getProgression = () => {
  const mainQuestion = 'What number is missing in the progression?';
  const unknownNumberIndex = getRandomInt(0, 9);
  const firstNumber = getRandomInt(1, 99);
  const difference = getRandomInt(1, 10);
  let number = firstNumber;
  let question = '';
  let rightAnswer;
  for (let i = 0; i < 10; i += 1) {
    if (i === unknownNumberIndex) {
      rightAnswer = number;
      question = `${question}.. `;
    } else {
      question = `${question}${number} `;
    }
    number += difference;
  }
  const normalisedQuestion = `Question: ${question.trim()}`;
  return [mainQuestion, normalisedQuestion, rightAnswer];
};

export default () => engine(getProgression);
