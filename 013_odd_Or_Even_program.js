// Program to find Even and Odd number
const readline = require("readline-sync");

const oddEven = (num) => {
    if ((num % 2) === 0) {
        console.log("The number is Even");
    } else {
        console.log("The number is odd");
    }
}

const num = readline.question('Enter the number ; ');
oddEven(num);