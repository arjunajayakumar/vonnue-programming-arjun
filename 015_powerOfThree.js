// 15. Write program to check if number is power of 3 of any number
const powerOfThree = (number) => {
    for (let i = 0; i<=number; i++){
        if((i * i * i) === number) {
            return true;
        }
    }
 return false;   
}

let number = 900;
console.log(powerOfThree(number));