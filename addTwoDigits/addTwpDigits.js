function addTwoDigits(n) {
  let sum = n
    .toString()
    .split('')
    .map((digit) => parseInt(digit))
    .reduce((acc, cur) => acc + cur);

  return sum;
}

console.log(addTwoDigits(29));
