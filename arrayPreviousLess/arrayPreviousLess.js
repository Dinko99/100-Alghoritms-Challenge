function arrayPreviousLess(items) {
  let newItems = [];
  for (let i = 0; i < items.length; i++) {
    let prevNum = items[i - 1];
    let currNum = items[i];
    if (prevNum > currNum || typeof prevNum !== 'number') {
      newItems.push(-1);
    } else if (prevNum < currNum) {
      newItems.push(prevNum);
    }
  }
  return newItems;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
