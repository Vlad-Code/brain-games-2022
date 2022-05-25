import engine from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getGsd = () => {
  const numberOne = getRandomInt(1, 100);
  const numberTwo = getRandomInt(1, 100);
  const mainQuestion = 'Find the greatest common divisor of given numbers.';
  const question = `Question: ${numberOne} ${numberTwo}`;
  const getEuclidsGsd = (num1, num2) => {
    if (num1 === num2) {
      return [mainQuestion, question, num1];
    }
    if (num1 > num2) {
      const remains = num1 % num2;
      if (remains === 0) {
        const rightAnswer = num2;
        return [mainQuestion, question, rightAnswer];
      }
      return getEuclidsGsd(num2, remains);
    }
    if (num1 < num2) {
      if (num2 % num1 === 0) {
        const rightAnswer = num1;
        return [mainQuestion, question, rightAnswer];
      }
      const remains = num2 % num1;
      return getEuclidsGsd(num1, remains);
    }
    return num1;
  };
  return getEuclidsGsd(numberOne, numberTwo);
};

export default () => engine(getGsd);
