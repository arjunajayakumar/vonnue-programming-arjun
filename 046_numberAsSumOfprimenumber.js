// 46. Can a number be expressed as a sum of two prime numbers?
const primeNumber = (number) => {
  let primeNumber = true;
  for (let i = 2; i < number; i++) {
    if ((number % i) === 0) {
      primeNumber = false;
      return false;
    }
  }
  return true;
}

const primeNumberAsSum = (number) => {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (primeNumber(i) === true) {
      for (let j = 1; j < number; j++) {
        if (primeNumber(j) == true) {
          if (parseInt(i) + parseInt(j) === parseInt(number)) {
            console.log(i, '+', j);
            return true;
          }
        }
      }
    }
  }
  return false;
}

console.log(primeNumberAsSum(31));