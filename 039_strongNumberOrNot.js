// 39. Strong number or not
const strong = (number) => {
  let sum = 0;
  let temp = number;
  while (temp > 0) {
    let factorial = 1;
    // to find the last digit of the number
    reminder = temp % 10;
    let i = 1;
    while (i <= reminder) {
      factorial = factorial * i;
      i++;
    }
    sum = parseInt(sum) + parseInt(factorial);
    // to find the quotient
    temp = parseInt(temp / 10);
  }
  if (sum === parseInt(number)) {
    return true;
  } else {
    return false;
  }
}

console.log(strong('40585'));

