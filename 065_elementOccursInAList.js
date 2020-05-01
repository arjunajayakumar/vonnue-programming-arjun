// 65. Write a function that checks whether an element occurs in a list.
const elementOccur = (list, element) => {
  let length = list.length;
  let count;
  let listArray = [];
  for (let i = 0; i < length; i++) {
    if (list[i] === element) {
      return true;
    }
  }
  return false;
}

console.log(elementOccur('12547854', '0'));