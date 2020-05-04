// 38. Armstrong number or not
const amstrong = (number) => {
  let sum = 0;
  const power = number.length;
  for (let i = 0; i < power; i++) {
    sum = parseInt(sum) + parseInt(number[i] ** power);
  }
  if (sum === parseInt(number)) {
    return true;
  } else {
    return false;
  }
}

console.log(amstrong('548834'));