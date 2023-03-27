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

const twoSum = function (nums, target) {
  const sumIndex = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        sumIndex.push(i, j);
        break;
      }
    }
  }

  return sumIndex;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4, 8, 5], 6));
console.log(twoSum([-1, 2, 1, 3, 5], 6));
