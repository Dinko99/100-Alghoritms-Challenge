function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    let diff = Math.abs(inputArray[i]) - Math.abs(inputArray[i + 1]);
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }
  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));
