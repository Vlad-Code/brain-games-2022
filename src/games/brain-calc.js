import engine from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const operators = ['+', '-', '*'];
const getRightAnswer = (num1, num2, oper) => {
  let rightAnswer;
  switch (oper) {
    case '+':
      rightAnswer = num1 + num2;
      break;

    case '-':
      rightAnswer = num1 - num2;
      break;

    default:
      rightAnswer = num1 * num2;
      break;
  }
  return rightAnswer;
};
const getCalculator = () => {
  const numberOne = getRandomInt(1, 100);
  const numberTwo = getRandomInt(1, 100);
  const operator = operators[getRandomInt(0, 2)];
  const mainQuestion = 'What is the result of the expression?';
  const question = `Question: ${numberOne} ${operator} ${numberTwo}`;
  const rightAnswer = getRightAnswer(numberOne, numberTwo, operator);
  return [mainQuestion, question, rightAnswer];
};

export default () => engine(getCalculator);
