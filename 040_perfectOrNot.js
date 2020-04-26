// 40. Perfect number or not
const perfect = (number) => {
  let perfect = 0;
  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      perfect = parseInt(perfect) + parseInt(i);
    }
  }
  if (perfect === number) {
    return true;
  } else {
    return false;
  }
}

console.log(perfect(28));