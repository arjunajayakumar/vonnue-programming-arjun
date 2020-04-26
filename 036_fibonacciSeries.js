// 36. Fibonacci series up to n
const fibonacci = (number) => {
  let a = 0;
  let b = 1;
  let sum = 0;
  let fib = [];
  while (sum < number) {
    a = b;
    b = sum;
    sum = parseInt(a) + parseInt(b);
    fib.push(sum); 
  }
  return fib.join(', '); 
}

console.log(fibonacci(13));