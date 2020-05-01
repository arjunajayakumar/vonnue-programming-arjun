// 60. Number of integers which has exactly 9 divisors
const divisorCount = (number) => {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if ((number % i) === 0) {
      count++;
    }
  }
  if (parseInt(count) === parseInt(9)) {
    return true;
  } else {
    return false;
  }
}

const integerCount = (firstNumber, lastNumber) => {
  let outputArray = [];
  for (let i = firstNumber; i < lastNumber; i++) {
    if (divisorCount(i) === true) {
      outputArray.push(i);
    }
  }
  return outputArray.join(',');
}

console.log(integerCount(1, 100));
