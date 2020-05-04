// 54. Maximum number of handshakes
const maxNoOfHandshakes = (number) => {
  let totalHandShakes = (number * (number - 1)) / 2;
  return totalHandShakes;
}

console.log(maxNoOfHandshakes(15));