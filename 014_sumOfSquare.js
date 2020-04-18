// 14. **Write program to check if number can be expressed as sum of squares of two whole numbers**

const sumOfSquare = (number) => {

    for (let i = 0; i <= number / 5; i++) {
        for (let j = 0; j <= number / 5; j++) {
            if ((i * i) + (j * j) === number) {
                return true;
            } 
        }
    }
    return false;
}

let number = 3;
console.log(sumOfSquare(number));