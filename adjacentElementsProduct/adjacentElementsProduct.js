function adjacentElementsProduct(inputArray) {
  let maxProduct = 0;
  for (i = 0; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    maxProduct = product > maxProduct ? product : maxProduct;
  }
  return maxProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
