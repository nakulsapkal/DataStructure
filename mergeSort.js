function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let left = mergeSort(arr.slice(0, arr.length / 2));
  let right = mergeSort(arr.slice(arr.length / 2));

  return mergeSortedArray(left, right);
}

function mergeSortedArray(arr1, arr2) {
  //[2,4,6] [1 ,3,5]

  // let newArr = [...arr1, ...arr2];

  // return newArr.sort((a, b) => a - b);

  let newArr = [];
  let j = 0;
  let i = 0;
  //[2,4,6] [1 ,3,5]
  //[22, 40, 61], [1, 3, 5]

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
}

console.log(mergeSort([22, 4, 61, 9, 1, 56, 3, 98, 2, 6]));
