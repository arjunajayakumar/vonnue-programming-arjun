const readline = require('readline-sync');
// Print the array in reverse order

const arrayReverse = (element) => {
    let arrayElement = element.split(",");
    let arrayLength = arrayElement.length;
    output = [];
    let i = arrayLength;
    while (i >= 0) {
        i--;
        console.log(arrayElement[i]);
    }
}

let element = readline.question("Enter the values : ");
arrayReverse(element);
