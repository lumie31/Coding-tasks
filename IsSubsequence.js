// https://leetcode.com/problems/is-subsequence/description/

var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;
  if (!s) return true;
  while (j < t.length) {
    if (t[j] === s[i]) i++;
    if (i === s.length) return true;
    j++;
  }
  return false;
};
