function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  let subArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] === elemToReplace
      ? subArray.push(substitutionElem)
      : subArray.push(inputArray[i]);
  }
  return subArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
