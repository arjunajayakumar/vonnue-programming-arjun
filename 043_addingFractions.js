// 43. Add two fractions
const gcd = (firstNumber, secondNumber) => {
  let output = [];
  for (let i = 1; i <= Math.min(firstNumber, secondNumber); i++) {
    if ((firstNumber % i) === 0 && (secondNumber % i) === 0) {
      divisor = i;
    }
  }
  return divisor;
}

const addFraction = (firstNumerator, firstDenominator, secondNumerator, secondDenominator) => {
  let numerator = (parseInt(firstNumerator * secondDenominator) + parseInt(secondNumerator * firstDenominator))
  let denominator = (firstDenominator * secondDenominator);
  // calling GCD
  const commonDivisor = gcd(numerator, denominator);
  numerator = numerator / commonDivisor;
  denominator = denominator / commonDivisor;
  console.log(numerator, '/', denominator);
}

addFraction(100, 150, 300, 350);