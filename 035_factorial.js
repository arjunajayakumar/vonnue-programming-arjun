// 35. Factorial of a number
const factorial = (number) => {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = parseInt(fact) * parseInt(i);
  }
  return fact;
}

console.log(factorial(6));