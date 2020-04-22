/* 10. Write a program that asks the user for a number n and gives them the possibility to choose between 
computing the sum and computing the product of 1,…,n. */

const operation = (choice) => {
	if (choice == "m") {
		multiplyByN(number);
	} else {
		sumByN(number);
	}
}
// Sum
const sumByN = (number, s) => {
	let i = 1;
	let sum = 0
	while (i <= number) {
		sum = (sum + i);
		i++;
	}
	console.log("Sum : ", sum);
}
// multiply
const multiplyByN = (number, m) => {
	let i = 1;
	let product = 1;
	while (i <= number) {
		product = (product * i);
		i++;
	}
	console.log("Product : ", product);
}

let number = 11;
const choice = "m";
operation(choice);

