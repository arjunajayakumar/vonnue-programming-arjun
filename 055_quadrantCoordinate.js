// 55. Quadrants in which coordinates lie
const quadrants = (x, y) => {
  if (x > 0 && y > 0) {
    return 'First quadrant';
  } else if ((x < 0) && (y > 0)) {
    return 'Second quadrant';
  } else if ((x < 0) && (y < 0)) {
    return 'Third quadrant';
  } else if ((x > 0) && (y < 0)) {
    return 'Fourth quadrant';
  }
}

console.log(quadrants(1, -8));
