// 53. Octal to binary conversion
const octalToBinary = (number) => {
  return parseInt(number, 8).toString(2);
}

console.log(octalToBinary('512'));