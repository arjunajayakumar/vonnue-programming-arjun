/* 3. Enter 2 strings and do the following operations
concatenate / reverse / reverse concat / mix the letters / split in half / remove all white spaces
 / add a character after every specific letter */

// Concatenate
const concatenate = (firstString, secondString) => {
  console.log("concatenate : ", `${firstString}, ${secondString}`);
}

// reverse
const stringReverse = (firstString, secondString) => {
  let firstStringLength = firstString.length;
  let secondStringLength = secondString.length;
  let reverseFirstArray = [];
  let reverseSecondArray = [];
  for (let i = firstStringLength; i >= 0; i--) {
    reverseFirstArray.push(firstString[i]);
    reverseFirstString = reverseFirstArray.join('');
  }

  for (let j = (secondStringLength) - 1; j >= 0; j--) {
    reverseSecondArray.push(secondString[j]);
    reverseSecondString = reverseSecondArray.join('');
  }
  console.log('Reverse :', `${reverseFirstString} ${reverseSecondString}`);
}

// Reverse concatenate
const reverseConcatenate = (firstString, secondString) => {
  const firstStringLength = firstString.length;
  const secondStringLength = secondString.length;
  let reverseFirstArray = [];
  let reverseSecondArray = [];
  for (let i = firstStringLength; i >= 0; i--) {
    reverseFirstArray.push(firstString[i]);
    reverseFirstString = reverseFirstArray.join('');
  }

  for (let j = secondStringLength; j >= 0; j--) {
    reverseSecondArray.push(secondString[j]);
    reverseSecondString = reverseSecondArray.join('');
  }
  console.log('Reverse concatenate :', `${reverseFirstString} ${reverseSecondString}`);
}

// Mix Letters
const mixLetters = (firstString, secondString) => {
  const firstStringLength = firstString.length;
  const secondStringLength = secondString.length;
  let reverseFirstArray = [];
  const length = Math.round((firstStringLength + secondStringLength)) / 2;
  for (let i = 0; i <= length; i++) {
    reverseFirstArray.push(firstString[i]);
    reverseFirstArray.push(secondString[i]);
  }
  reverseFirstArray.join('');
  console.log('Mix letters :', reverseFirstArray.join(''));
}

// Split in to half
const split = (firstString, secondString) => {
  const firstStringLength = firstString.length;
  const firstRound = Math.round(firstStringLength / 2);
  const secondStringLength = secondString.length;
  const secondRound = Math.round(secondStringLength / 2);
  console.log('Split in to half : ', firstString.slice('', firstRound), firstString.slice(firstRound), secondString.slice('', secondRound), secondString.slice(secondRound));
}

// Remove white space
const removeWhiteSpace = (firstString, secondString) => {
  console.log('Remove white space :', firstString.replace(/\s/g, ''), secondString.replace(/\s/g, ''));
}

//insert Character
const insertCharacter = (firstString, secondString) => {
  const firstStringLength = firstString.length;
  const seconsStringLength = secondString.length;
  let firstArray = [];
  let secondArray = [];
  for (let i = 0; i < firstStringLength; i++) {
    firstArray.push(firstString[i]);
    firstArray.push('$');

  }
  for (let j = 0; j < seconsStringLength; j++) {
    secondArray.push(secondString[j]);
    secondArray.push('$');
  }
  console.log('Insert character :', firstArray.join(''), secondArray.join(''));
}

concatenate('JavaScript', 'Developer');
stringReverse('JavaScript', 'Developer');
reverseConcatenate('JavaScript', 'Developer');
mixLetters('JavaScript', 'Developer');
split('JavaScript', 'Developer');
removeWhiteSpace('Java Script', 'Deve loper');
insertCharacter('JavaScript', 'Developer');

