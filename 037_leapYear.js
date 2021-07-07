// 37. Leap year or not
const leapYear = (year) => {
  if ((year % 4) === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(leapYear(2028));