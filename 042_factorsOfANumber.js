// 42. Find all Factors of a number
const factors = (number) => {
  limit = Math.round(number / 2);
  for (let i = 0; i <= limit; i++) {
    if (number % i === 0) {
      console.log(i);
    }
  }
}

factors(49);