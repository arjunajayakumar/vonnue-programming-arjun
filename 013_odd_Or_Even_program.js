const readlineSync = require('readline-sync');
const number = readlineSync.question(' Enter the number ');

if ((number % 2) === 0) {

    console.log(" The number is Even ")
}
else {
    console.log(" The number is Odd ")
}