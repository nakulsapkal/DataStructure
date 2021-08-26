function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start]; //selected to start with
  let swapIndex = start; //this would be maintained to see how many elements are less than pivot

  for (let index = start + 1; index <= end; index++) {
    if (pivot > arr[index]) {
      console.log(arr, swapIndex, index);
      swapIndex++;
      swap(arr, swapIndex, index); //here we swap once less number is found in the array and we swap the positions of swapindex and the number which is small to pivot
    }
  }
  swap(arr, start, swapIndex); //Once all the small values are found for pivot then we swap pivot's place with swapindex and start, to brinf the pivot in its actuall place

  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    //as left and right comes closer to each other and those are just pointers
    let pivotIndex = pivot(arr, left, right); //this would just return the pivot i.e index of the first selected element.

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5]));
