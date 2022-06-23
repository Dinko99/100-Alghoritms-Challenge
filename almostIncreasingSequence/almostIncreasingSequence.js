function almostIncerasingSequence(inputArray) {
  const countHigherNums = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      countHigherNums.push(inputArray[i + 1]);
    }
    if (
      inputArray[i] >= inputArray[i + 2] &&
      inputArray[i] >= inputArray[i + 1]
    ) {
      countHigherNums.push(inputArray[i + 2]);
    }
  }

  return countHigherNums.length < 2;
}

console.log(almostIncerasingSequence([1, 3, 2, 1]));
console.log(almostIncerasingSequence([1, 3, 2]));
