// 61. Roots of a quadratic equation
const quadraticEquation = (a, b, c) => {
  let descriminanat;
  let squareroot;
  let output;
  discriminanat = (b ** 2 - 4 * a * c);
  if (discriminanat < 0) {
    output = -b / (2 * a);
    squareroot = Math.sqrt(- discriminanat);
    console.log('x1 :', output, '+', squareroot / (2 * a), 'i');
    console.log('x2 :', output, '-', squareroot / (2 * a), 'i');

  } else if (discriminanat === 0) {
    output = -b / (2 * a)
    console.log('x :', output);

  } else if (discriminanat > 0) {
    output = -b / (2 * a);
    squareroot = Math.sqrt(discriminanat);
    console.log('x1 :', output + squareroot / (2 * a));
    console.log('x2 :', output - squareroot / (2 * a));

  }
}

quadraticEquation(1, 2, 1);






