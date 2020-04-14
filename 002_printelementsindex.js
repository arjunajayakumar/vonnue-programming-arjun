const readline = require('readline-sync');
// Write a function to print all the elements whose index is a multiple of 2

const arrayIndex = (element) => {
    let arrayElement = element.split(",")
    let arrayLength = arrayElement.length;
    output = [];
    for (let i = 0; i < arrayLength; i++) {
        i = i + 1;
        output[i] = arrayElement[i];
    }
    console.log(output);
}

let element = readline.question('Enter the values : ');
arrayIndex(element);




