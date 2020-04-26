// 31. Sum of digits of a number
const sumOfDigits = (number) => {
  let sum = 0;
  let numberLength = number.length;
  const limit = numberLength - 1;
  for (let i = 0; i <= limit; i++) {
    sum = parseInt(sum) + parseInt(number[i]);
  }
  return sum;
}

console.log(sumOfDigits('58796521'));