/* 9. Modify the previous program such that only multiples 
of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17 */

const sumByN = (number) => {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        if (((i % 3) === 0) || ((i % 5) === 0)) {
            sum = (sum + i);

        } else {
            continue;
        }
    }
    console.log("Sum : ", sum);
}

let number = 17;
sumByN(number);