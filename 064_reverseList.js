// 64. Write function that reverses a list, preferably in place.
const reverseList = (list) => {
  let reverseArray = [];
  let length = list.length - 1;
  for (let i = length; i >= 0; i--) {
    reverseArray.push(list[i]);
  }
  return reverseArray.join('');
}

console.log(reverseList('javaScript'));