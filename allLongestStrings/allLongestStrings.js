function allLongestStrings(inputArray) {
  const newArr = inputArray.sort((a, b) => b.length - a.length);
  const maxLength = newArr[0].length;

  return newArr.filter((string) => string.length === maxLength);
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
