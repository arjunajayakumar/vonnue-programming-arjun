function check_prime_number(number) {
    let primeNumber = true;
    for (let i=2;i<number;i++) {
        if ((number%i) === 0) {
            primeNumber = false; 
            break;
        }

    }
    console.log(`The number is ${primeNumber?"prime":"not prime"}`)
}
console.log("enter the number");
process.stdin.on('data', check_prime_number)
