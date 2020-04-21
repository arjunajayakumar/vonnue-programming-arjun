// 22. Write a program to check Uppercase, Lowercase or special character
const upperLowerSpecialCharacter = () => {
  let character = '|';
  let asciiValue = character.charCodeAt(0);
  if (asciiValue >= 65 && asciiValue <= 90) {
    console.log("Uppercase");
  } else if (asciiValue >= 97 && asciiValue <= 122) {
    console.log("Lowercase");
  } else if ((asciiValue >= 33 && asciiValue <= 64) || (asciiValue >= 91 && asciiValue <= 96) || (asciiValue >= 123 && asciiValue <= 126)) {
    console.log("Special character");
  }
}

upperLowerSpecialCharacter();
