function absoluteValuesSumMinization(arr) {
  let value = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? arr[value - 1] : arr[value];
}

console.log(absoluteValuesSumMinization([2, 4, 7]));
console.log(absoluteValuesSumMinization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinization([2, 4, 7, 6, 6, 8]));
