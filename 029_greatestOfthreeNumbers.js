// 29. Greatest of three numbers
const greatest = (firstNumber, secondNumber, thirdNumber) => {
  if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    return firstNumber;
  } else if (secondNumber > thirdNumber && secondNumber > firstNumber) {
    return secondNumber;
  } else {
    return thirdNumber;
  }
}

console.log(greatest(367, 587, 35897));