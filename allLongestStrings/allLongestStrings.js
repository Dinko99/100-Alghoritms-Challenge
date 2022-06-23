function allLongestStrings(inputArray) {
  const newArr = inputArray.sort((a, b) => b.length - a.length);
  const length = newArr[0].length;

  return newArr.filter((string) => string.length === length);
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
