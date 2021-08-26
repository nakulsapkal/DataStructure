function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true; //optimises the bubble sort if the given array is half sorted.
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1], i - 1);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([100, 300, 54, 98, 1, 5, 6]));
