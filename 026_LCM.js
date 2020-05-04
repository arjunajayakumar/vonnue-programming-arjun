//26. LCM of two numbers
const gcd = (firstNumber, secondNumber) => {
  let output, lcm;
  for (let i = 1; i <= Math.min(firstNumber, secondNumber); i++) {
    if ((firstNumber % i) === 0 && (secondNumber % i) === 0) {
      output = i;
    }
  }
  return output;
}

const lcm = (firstNumber, secondNumber) => {
  const lcm = (firstNumber * secondNumber) / gcd(firstNumber, secondNumber);
  return lcm;
}

console.log(lcm(12, 2));
 

