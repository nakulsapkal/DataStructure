function getDigit(num, position) {
  //returns digit for the given position
  if (position >= num.toString().split("").length) return 0;
  return Number(num.toString().split("").reverse().join("")[position]);
}
function digitCount(num) {
  //counts the number of digits in the given number
  return num.toString().split("").length;
}
function mostDigits(nums) {
  //returns the max length of a number from array of numbers
  let maxLength = 0;
  nums.forEach((element) => {
    if (digitCount(element) > maxLength) maxLength = digitCount(element);
  });
  return maxLength;
}

function radixSort(nums) {
  let maxlength = mostDigits(nums);
  //[123,1234,12]

  for (let i = 0; i < maxlength; i++) {
    // let arrBucket = Array(10)
    //   .fill()
    //   .map(() => Array(10).fill());
    let arrBucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digitIndex = getDigit(nums[j], i);

      //console.log(arrBucket, i, j, maxlength, digitIndex, nums);
      arrBucket[digitIndex].push(nums[j]);
    }
    nums = [].concat(...arrBucket); //concating the number again to go for next pass using spread oprator so indiviual items are copied
    console.log(nums);
  }
  return nums;
}

// console.log(getDigit(1234, 0));
// console.log(digitCount(1234));

radixSort([123, 234, 1, 3, 11111]);
