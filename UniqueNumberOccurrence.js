// https://leetcode.com/problems/unique-number-of-occurrences/description/

var uniqueOccurrences = function (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] ? obj[arr[i]]++ : (obj[arr[i]] = 1);
  }

  const valueArr = Object.values(obj);

  if (valueArr.length !== new Set(valueArr).size) {
    return false;
  }
  return true;
};
