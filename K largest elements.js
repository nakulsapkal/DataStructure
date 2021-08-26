// { Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let [n, k] = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let arr = new Array(n);
    let input_line = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    for (let j = 0; j < n; j++) arr[j] = input_line[j];
    let obj = new Solution();
    let res = obj.kLargest(arr, n, k);
    let ans = "";
    for (let j = 0; j < res.length; j++) {
      ans += res[j] + " ";
    }
    console.log(ans);
  }
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
 */

class Solution {
  //Function to return k largest elements from an array.
  kLargest(arr, n, k) {
    //code here

    function compareNumbers(a, b) {
      return a - b;
    }
    return arr.sort(compareNumbers).splice(n - 2, k);
  }
}
