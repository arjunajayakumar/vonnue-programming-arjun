// 33. Sum of numbers in a given range
const sumInGivenRange = (firstNumber, lastNumber) => {
  const sum = ((lastNumber - firstNumber + 1) * (firstNumber + lastNumber)) / 2;
  return sum;
}

console.log(sumInGivenRange(35, 66));