const readline = require('readline-sync');
// Write a function to print all the elements of an array

const printArray = (element) => {
    let arrayElement = element.split(",");
    console.log(arrayElement);
}

let element = readline.question('enter the numbers : ');
printArray(element);

