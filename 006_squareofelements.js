const readline = require('readline-sync');
// Write a function to multiply elements of an array to itself ( find the square of each elements in the array)

const elementSquare = (element) => {
    let arrayElement = element.split(",");
    let arrayLength = arrayElement.length;
    let square = [];
    for (let i = 0; i < arrayLength; i++) {
        square[i] = (arrayElement[i] * arrayElement[i]);
    }
    console.log(square);
}

let element = readline.question('Enter the numbers : ');
elementSquare(element);
