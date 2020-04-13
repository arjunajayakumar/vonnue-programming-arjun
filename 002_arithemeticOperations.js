const readlinesync = require('readline-sync');

// Addition
const addition = (numb1, numb2) => {
    console.log("Sum :", parseInt(numb1) + parseInt(numb2));
}

// Multiplication
const multiplication = (numb1, numb2) => {
    console.log("Product :", (numb1 * numb2));
}

// division
const division = (numb1, numb2) => {
    console.log("Division : ", (numb1 / numb2));
}

// modulus
const modulus = (numb1, numb2) => {
    console.log("Modulus : ", (numb1 % numb2));
}

// subtraction
const subtraction = (numb1, numb2) => {
    console.log("Difference : ", (numb1 - numb2));
}

// greater than
const greaterthan = (numb1, numb2) => {
    if (numb1 > numb2) {
        console.log(numb1, "is greater");
    }
    else {
        console.log(numb2, "is greater");
    }
}

// less than
const lessthan = (numb1, numb2) => {
    if (numb1 < numb2) {
        console.log(numb1, "is lesser");
    }
}

// equal to
const equalto = (numb1, numb2) => {
    if (numb1 === numb2) {
        console.log(numb1, "and", numb2, "are equal");
    }
    else {
        console.log(numb1, "and", numb2, "are not equal");
    }
}

let numb1 = readlinesync.question(' Enter the first number : ');
let numb2 = readlinesync.question(' Enter the second number : ');
addition(numb1, numb2);
multiplication(numb1, numb2);
division(numb1, numb2);
modulus(numb1, numb2);
subtraction(numb1, numb2);
greaterthan(numb1, numb2);
lessthan(numb1, numb2);
equalto(numb1, numb2);


