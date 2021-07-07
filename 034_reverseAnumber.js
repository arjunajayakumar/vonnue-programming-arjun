// 34. Reverse a given number
const reverse = (number) => {
  const stringLength = number.length;
  const limit = stringLength - 1;
  const reversedString = [];
  for (let i = limit; i >= 0; i--) {
    reversedString.push(number[i]);
  }
  return reversedString.join('');
}

console.log(reverse('12245'));