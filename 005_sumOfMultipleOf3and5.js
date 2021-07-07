const readline = require('readline-sync');
// Write a function to print all the elements whose value is a multiple of 3 and multiple of 5

const arrayMultiple = (element) => {
    let arrayElement = element.split(",");
    let arrayLength = arrayElement.length;
    let multiple = [];
    for (let i = 0; i < arrayLength; i++) {
        if (((arrayElement[i] % 3) === 0) && ((arrayElement[i] % 5) === 0)) {
            multiple[i] = arrayElement[i];
        } else {
            console.log();
        }
    }
    console.log("Multiples of 5 and 3 are : ", multiple);
}

let element = readline.question('Enter the values : ');
arrayMultiple(element);
