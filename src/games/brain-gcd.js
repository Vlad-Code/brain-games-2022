import engine from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getEuclidsGsd = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  if (num1 > num2) {
    const remains = num1 % num2;
    if (remains === 0) {
      return num2;
    }
    return getEuclidsGsd(num2, remains);
  }
  if (num2 % num1 === 0) {
    return num1;
  }
  const remains = num2 % num1;
  return getEuclidsGsd(num1, remains);
};
const getGsd = () => {
  const numberOne = getRandomInt(1, 100);
  const numberTwo = getRandomInt(1, 100);
  const mainQuestion = 'Find the greatest common divisor of given numbers.';
  const question = `Question: ${numberOne} ${numberTwo}`;
  const rightAnswer = getEuclidsGsd(numberOne, numberTwo);
  return [mainQuestion, question, rightAnswer];
};

export default () => engine(getGsd);
