// 58. Permutations in which n people can occupy r seats in a theatre
const factorial = (number) => {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = parseInt(fact) * parseInt(i);
  }
  return fact;
}

const permutation = (people, seats) => {
  let totalSeats = factorial(people) / factorial(people - seats)
  return totalSeats;
}

console.log(permutation(3, 2));