const readline = require('readline-sync');
// 7. Multiple each element of an array with a constant and print the result

const arrayMultiply = (elements) => {
    let arrayLength = elements.length;
    let product = [];
    for (let i = 0; i < arrayLength; i++) {
        product[i] = parseInt(elements[i]) * constant;
    }
    console.log(product);
}

let elements = [1, 2, 5, 8, 9, 4, 6];
const constant = 5;
arrayMultiply(elements);
