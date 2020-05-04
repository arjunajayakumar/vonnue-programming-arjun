// 45. Armstrong numbers between two intervals
const amstrong = (number) => {
  let sum = 0;
  let power = number.length;
    for (let i = 0; i < power; i++) {
      sum = parseInt(sum) + parseInt(number[i] ** power);
    }
    if (sum === parseInt(number)) {
      return true;
    } else {
      return false;
    }
  }

const amstrongBtwntwoRanges = (firstDigit, lastDigit) => {
  let outputAmstrong = [];
  for (let j = firstDigit; j < lastDigit; j++) {
    if (amstrong(`${j}`) === true) {
      outputAmstrong.push(j);
    }
  }
  return outputAmstrong.join(',');
}

console.log(amstrongBtwntwoRanges(1, 999));