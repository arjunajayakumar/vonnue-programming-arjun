// program to check whether the entered number is prime or not

const readlineSync = require('readline-sync');
const number = readlineSync.question(' Enter the number : ');
    let primeNumber = true;
    for (let i=2;i<number;i++) {
        if ((number%i) === 0) {
            primeNumber = false; 
            break;
        }

    }
    console.log(`The number is ${primeNumber?"prime":"not prime"}`)




