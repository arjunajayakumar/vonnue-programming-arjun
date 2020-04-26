// 44. Prime numbers in a given range
const check_prime_number = (number) => {
  let primeNumber = true;
  for (let i = 2; i < number; i++) {
    if ((number % i) === 0) {
      primeNumber = false;
      return false;
    }
  }
  return true;
}

const primeNumber = (firstDigit, lastDigit) => {
  let primeArray = [];
  for (let j = firstDigit; j < lastDigit; j++) {
    if (check_prime_number(j) === true) {
      primeArray.push(j);
    }
  }
  return primeArray.join(',');
}

console.log(primeNumber(100, 150));
