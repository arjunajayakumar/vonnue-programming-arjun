// 66. Length of the string without using strlen() function
const stringLength = (string) => {
  string += '$';
  let count = 0;
  let i = 0;
  while (i >= 0) {
    if (string[i] === '$') {
      break;
    }
    i++;
  }
  return i;
}

console.log(stringLength('5214547852'));

