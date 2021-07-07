const readline = require('readline-sync');
// Write a function to print the square of a number and call this function for each element of an array

const arraySquare = (element) => {
    for (let i = 0; i < arrayLength; i++) {
        console.log(arrayElement[i] * arrayElement[i]);
    }
}

let element = readline.question("Enter the values : ");
let arrayElement = element.split(",");
let arrayLength = arrayElement.length;
arraySquare(parseInt(element));