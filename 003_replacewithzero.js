const readline = require('readline-sync');
// Write a function to replace all the elements of an array with 0

const replacewithZero = (element) => {
    let arrayElement = element.split(",")
    arrayLength = arrayElement.length;
    output = [];
    for (let i = 0; i < arrayLength; i++) {
        output[i] = (arrayElement[i] * 0)
    }
    console.log(output);

}
element = readline.question('Enter the values : ');
replacewithZero(element);
