// 56. Convert digit/number to words
const convertDigitNumberWords = (number) => {
  let wordArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let outputArray = [];
  let wordLength = wordArray.length;
  let length = number.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < wordLength; j++) {
      if (parseInt(number[i]) === j) {
        outputArray.push(wordArray[j]);
      }

    }
  }
  return outputArray.join(' ');
}

console.log(convertDigitNumberWords('1034568'));