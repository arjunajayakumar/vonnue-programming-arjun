/* 10. Write a program that asks the user for a number n and gives them the possibility to choose between 
computing the sum and computing the product of 1,…,n. */

const operation = (choice, number) => {
	if (choice == 'm') {
		multiplyByN(choice, number);
	} else {
		sumByN(choice, number);
	}
}
// Sum
const sumByN = (s, number) => {
	let i = 1;
	let sum = 0
	while (i <= number) {
		sum = (sum + i);
		i++;
	}
	console.log("Sum : ", sum);
}
// multiply
const multiplyByN = (m, number) => {
	let i = 1;
	let product = 1;
	while (i <= number) {
		product = (product * i);
		i++;
	}
	console.log("Product : ", product);
}

operation('m', 16);

