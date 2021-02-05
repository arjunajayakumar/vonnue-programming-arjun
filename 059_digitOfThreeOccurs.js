// 59. Number of times digit 3 occurs in each and every number from 0 to n
const digitThreeOccurs = (number) => {
  let count = 0;
  for (let i = 1; i < number; i++) {
    if ((i % 1 === 3) || (i % 10 === 3)) {
      count++;
    }
  }
  return count;
}

console.log(digitThreeOccurs(50));