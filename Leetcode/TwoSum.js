// https://leetcode.com/problems/two-sum/
/*
  Given an array of integers nums and an integer target, 
  return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, 
  and you may not use the same element twice.

  You can return the answer in any order.
*/

var twoSum = function (nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hashMap) {
      return [hashMap[target - nums[i]], i];
    }
    hashMap[nums[i]] = i;
  }
};
