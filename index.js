function addTwoNumbers(a, b) {
  return a + b;
}

function addMultipleNumbers(...params) {
  return params.reduce((acc, cur) => acc + cur);
}

console.log(addTwoNumbers(1, 2));
console.log(addMultipleNumbers(1, 2, 3, 4, 5, 6, 7));
