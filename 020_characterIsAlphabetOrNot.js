// 20. Write a program to check if a character is an alphabet or not
const characterCheck = (asciiValue) => {
  if ((asciiValue >= 65 && asciiValue <= 90) || (asciiValue >= 97 && asciiValue <= 122)) {
    return true;
  } else {
    return false;
  }
}

let character = 'r';
let asciiValue = character.charCodeAt(0);
console.log(characterCheck(asciiValue));
