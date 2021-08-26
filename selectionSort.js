function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr, i, j, minimum);
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    if (i !== minimum) {
      let temp = arr[i];
      arr[i] = arr[minimum];
      arr[minimum] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([100, 300, 54, 98, 1, 5, 6]));
