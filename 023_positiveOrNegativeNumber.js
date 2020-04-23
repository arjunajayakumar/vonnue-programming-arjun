// 23. Write a program to check a number is positive or negative
const positiveOrNegative = (number) => {
  let sign = Math.sign(number);
  console.log(`Sign :`, sign);
}

positiveOrNegative(-8);