// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hashMap) {
      return [hashMap[target - nums[i]], i];
    }
    hashMap[nums[i]] = i;
  }
};
