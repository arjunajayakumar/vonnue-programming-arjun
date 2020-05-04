// Replace all 0's with 1 in a given integer
const replace1WithZero = (number) => {
  let numberArray = [];
  let length = number.length;
  for (let i = 0; i < length; i++) {
    numberArray.push(number[i]);
  }

  for (let j = 0; j < length; j++) {
    if (parseInt(numberArray[j]) === parseInt(0)) {
      numberArray[j] = 1;
    }
  }
  return numberArray.join('');
}

console.log(replace1WithZero('100025'));