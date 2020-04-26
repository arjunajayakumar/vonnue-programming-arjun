// 27. GCD of two numbers
const gcd = (firstNumber, secondNumber) => {
  let output = [];
  for (let i = 1; i <= Math.min(firstNumber, secondNumber); i++) {
    if ((firstNumber % i) === 0 && (secondNumber % i) === 0) {
      divisor = i;
    }
  }
  return divisor;
}

console.log(gcd(100, 150));


