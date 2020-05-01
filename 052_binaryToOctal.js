// 52. Binary to octal conversion
const binaryToOctal = (number) => {
  return parseInt(number, 2).toString(8);
}

console.log(binaryToOctal('10001001'));