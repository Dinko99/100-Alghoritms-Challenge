function arrayMaxConsecutiveSum(inputArray) {
  let maxSum = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    let sum = inputArray[i] + inputArray[i + 1];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6]));
