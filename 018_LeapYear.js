// 18. Write a program that prints the next 20 leap years.

const leapYear = () => {
  let count = 0;
  for (let i = 2021; i > count; i++) {
    if ((i % 4) === 0) {
      console.log(i);
      count++;
    }
    if (count === 20) {
      break;
    }
  }
}

leapYear();