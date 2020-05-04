// 51. Octal to decimal conversion
const octalToDecimel = (number) => {
  return parseInt(number, 8).toString(10);
}

console.log(octalToDecimel('172'));