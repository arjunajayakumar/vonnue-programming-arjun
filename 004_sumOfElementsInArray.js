const readline = require('readline-sync');
// Write a function to find the sum of all elements of an array

const sumofArray = (element) => {
    let arrayElement = element.split(",");
    let arrayLength = arrayElement.length;
    let sum = 0;
    for (let i= 0; i<arrayLength; i++) {
        sum = (parseInt(arrayElement[i])  + parseInt(sum));
    }
    console.log(sum);
}

element = readline.question('Enter the values : ');
sumofArray(element);
