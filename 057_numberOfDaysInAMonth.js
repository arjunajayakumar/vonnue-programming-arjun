// 57. Number of days in a given month of a given year
const numberOfDays = (month, year) => {
  if (((year % 4) === 0) && (month === 2)) {
    console.log ('Number of days in', `${month} ${year}` ,'is 29');
  } else if (month === 1 || 3 || 5 || 7 || 8 || 12) {
    console.log ('Number of days in', `${month} ${year}` ,'is 31');
  } else if (month === 2 || 4 || 6 || 9 || 11) {
    console.log ('Number of days in', `${month} ${year}` ,'is 30');
  }

}

numberOfDays(6, 2023);