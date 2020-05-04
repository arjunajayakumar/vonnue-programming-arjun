// 16. Write a program that prints all prime numbers. 
const checkPrimeNumber = (number) => {
  let primeNumber = true;
  for (let i = 2; i < number; i++) {
    if ((number % i) === 0) {
      primeNumber = false;
      return false;
    }
  }
  return true;
}
const primeNumber = (number) => {
  let primeArray = [];
  for (let j = 1; j <= number; j++) {
    if (checkPrimeNumber(j) === true) {
      primeArray.push(j);
    }
  }
  return primeArray.join(',');
}

console.log(primeNumber(100));



