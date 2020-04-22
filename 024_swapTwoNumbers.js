// 23. Write a program to Swap two numbers without third variable
const swap = () => {
  let firstNumber = 6;
  let secondNumber = 5;
  firstNumber = firstNumber + secondNumber;
  secondNumber = firstNumber - secondNumber;
  firstNumber = firstNumber - secondNumber;
  console.log('Firstnumber', firstNumber);
  console.log('Secondnumber', secondNumber);
}

swap();