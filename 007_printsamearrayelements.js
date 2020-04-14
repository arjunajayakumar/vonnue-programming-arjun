const readline = require('readline-sync');
// Declare 2 arrays of the same size and print the values of both using one for loop
const sameArray = (element) => {
    let array1 = [];
    let array2 = [];
    for (i = 0; i < arraylength1; i++) {
        array1[i] = firstArrayValues[i];
        array2[i] = secondArrayValues[i];
    }
    console.log("Array 1 : ", array1);
    console.log("Array 2 : ", array2);
}

let firstArray = readline.question("Enter the values for the first array : ")
let firstArrayValues = firstArray.split(",");
let firstArrayLength = firstArrayValues.length;
let secondArray = readline.question("Enter the values for the second array : ")
let secondArrayValues = secondArray.split(",");
let secondArrayLength = secondArrayValues.length;
sameArray(firstArray, secondArray);

