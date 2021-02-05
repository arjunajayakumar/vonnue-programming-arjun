// 68. Count the number of vowels
const vowelsCount = (string) => {
  let vowelArray = ['a', 'e', 'i', 'o', 'u']
  let count = 0
  let length = string.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (string[i] === vowelArray[j]) {
        count++;
      }

    }
  }
  return count;
}

console.log(vowelsCount('wtionyu'));