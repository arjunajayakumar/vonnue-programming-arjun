// program to find the sum of numbers in agiven array
const readline = require('readline-sync');

const sumofArray = (elements) => {
    let numberArray = elements.split(",")
    let arrayLength = numberArray.length
    sum = 0;
    for (i = 0; i < arrayLength; i++) {
        sum = (parseInt(numberArray[i]) + parseInt(sum));
    }
    console.log("The sum is:", sum);
}

let elements = readline.question('enter the numbers seperated by comma ');
sumofArray(elements);




