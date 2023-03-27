"use strict";

/* Given an integer array = nums, return true if any value appears AT LEAST TWICE
in the array and return false if EVERY ELEMENT IS DISTINCT

Example:
nums = [1,2,3,1]
Output: True

nums = [1,2,3,4]
Output: False

1 <= nums <= 10^5
-10^9 <= nums[i] <= 10^9

1. Iterate through the array nums
2. Check each value to see if any of them = each other (a===b?)
3. Return true if so
4. else, return false
*/

// 62 ms

// var containsDuplicate = function (nums) {
//   // Strip duplicate numbers by converting to a set
//   const strippedNums = new Set(nums);
//   // Compare the length of the nums array to the size of the strippedNums set
//   return nums.length !== strippedNums.size;
// };

const containsDuplicate = (nums) => nums.length !== new Set(nums).size;

console.log(containsDuplicate([1, 1, 2, 3, 2, 4]));
console.log(containsDuplicate([1, 2, 3, 4, 5]));

// const containsDuplicate2 = function (nums) {
//   let isDup = false;
//   const sorted = nums.sort();

//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i - 1] == sorted[i]) {
//       isDup = true;
//     }
//   }
//   return isDup;
// };

// console.log(containsDuplicate2([1, 2, 3, 4]));
