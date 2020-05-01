// 69. Remove vowels from a string
const checkVowels = (character) => {
  let vowelArray = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowelArray.length; i++) {
    if (character === vowelArray[i]) {
      return true;
    }
  }
  return false;
}

const removeVowel = (string) => {
  let outputArray = [];
  for (let j = 0; j < string.length; j++) {
    if (checkVowels(string[j]) === false) {
      outputArray.push(string[j]);

    }
  }
  return outputArray.join('')
}

console.log(removeVowel('aedrhfghh'));




