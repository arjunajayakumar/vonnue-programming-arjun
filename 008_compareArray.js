const readline = require('readline-sync');
// Write a program to compare the current item in the array to the next item and print if they are equal or not 

const arraycompare = (element) => {
    let arrayElement = element.split(",");
    let arrayLength = arrayElement.length;
    for (let i = 0; i < arrayLength - 1; i++) {
        if ((arrayElement[i]) === (arrayElement[i + 1])) {
            console.log(arrayElement[i], "and", arrayElement[i + 1], "are", "equal");
        } else {
            console.log(arrayElement[i], "and", arrayElement[i + 1], "are", "not equal");
        }
    }

}

let element = readline.question("Enter the values sepereted by comma : ");
arraycompare(element);

