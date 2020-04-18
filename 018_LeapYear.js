// 18. Write a program that prints the next 20 leap years.

const leapYear = (year) => {
    for (let i = 2021; i <= year; i++) {
        if ((i % 4) === 0) {
            console.log(i);
        }
    }
}

let year = 2100;
leapYear(year);