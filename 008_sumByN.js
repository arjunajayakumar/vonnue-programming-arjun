// 8. Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

const sumByN = (number) => {
    let i = 1;
    let sum = 0
    while (i <= number) {
        sum = (sum + i);
        i++;
    }
    console.log(sum);
}

let number = 11;
sumByN(number);