// 67. Toggle each character in a string
const upperCase = (character) => {
  let asciiValue = character.charCodeAt(0);
  if (asciiValue >= 65 && asciiValue <= 90) {
    return true;
  } else {
    return false;
  }
}

const toggle = (string) => {
  let outputArray = [];
  for (let j = 0; j < string.length; j++) {
    if (upperCase(string[j]) === true) {
      outputArray.push(string[j].toLowerCase())
    } else {
      outputArray.push(string[j].toUpperCase())
    }
  }
  return outputArray.join('');
}

console.log(toggle('ARtehgeW'));



  
  
  
    
  

