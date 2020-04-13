const readline = require('readline-sync');

const arrayMultiply = (elements) => {
    let numberArray = elements.split(",");
    let arrayLength = numberArray.length;
    let product = [];
    for (i = 0; i < arrayLength; i++) {
        product[i] = parseInt(numberArray[i]) * value;  
    }
    console.log(product);
}

let elements = readline.question('Enter the numbers seperated by comma : ');
const value = readline.question('Enter the constant to multiply ; ');
arrayMultiply(elements);
