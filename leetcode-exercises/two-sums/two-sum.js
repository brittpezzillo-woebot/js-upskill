"use strict";

/* Given an array of integers nums and an integer target, return indices of the two numbers such taht they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice
answer can be returned in any order 

Example:
Input:
nums = [2,7,11,15], target = 9
Output: [0, 1]
Explanation: nums[0] is 2. nums[1] is 7. 2+7=9 (the target)
*/

// BREAK DOWN PROBLEM

/*
1. Iterate over the numbers in the array nums
2. Add the number at [0] to number at [1]
3. If the sum = the target, return the index of those two numbers.
4. If the sum != the target, continue by adding [0] to [2], etc. Loop through the array until the condition is met.
5. If 
*/

const twoSum = function (nums, target) {
  // Declare an empty array in which to store the indexes of our sum candidates
  const sumIndex = [];

  // Iterate through nums whle i is less than the total length of nums.length (not inclusive)
  // This could be written as well as like i <= nums.length-1 due to 0 indexing
  for (let i = 0; i < nums.length; i++) {
    // Nest loop to go over the other elements. j is equal to i + 1, so it will be the next index up
    // Loop also runs wihle j is less than the length of nums
    for (let j = i + 1; j < nums.length; j++) {
      // set sum variable = the sum of nums at index 1 + nums at index j
      // So for the first loop, tihs would be nums[0] + nums[0+1]
      let sum = nums[i] + nums[j];
      // Condition, if the sum is equal to the target number, then push i and j to the sumIndex array.
      // Notice we are not using nums[i] or nums[j]
      // This is becuase we want the index number, which i accumulates and not the element itself
      if (sum === target) {
        sumIndex.push(i, j);
        break;
      }
    }
  }
  // returns the value of sumIndex
  return sumIndex;
};

// const twoSum = function (nums, target) {
//   // Declare an empty array in which to store the indexes of our sum candidates
//   const sumIndex = [];
//   let isSolved = false;

//   while (isSolved === false) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         let sum = nums[i] + nums[j];
//         if (sum === target) {
//           sumIndex.push(i, j);
//           isSolved = true;
//         }
//       }
//     }
//   }
//   return sumIndex;
// };

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4, 8, 5], 6));
// console.log(twoSum([-1, 2, 1, 3, 5], 6));

/*
ob/dict/hashmap
With obj if you have key, you can retrieve value
obj or dict that stores what nums we visited in our array and tells us what index they're at
*/

const twoSum2 = function (nums, target) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in hashMap) {
      return [hashMap[diff], i];
    }
    hashMap[nums[i]] = i;
    console.log(hashMap);
  }
};
console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4, 8, 5], 6));
console.log(twoSum2([-1, 2, 1, 3, 5], 6));
