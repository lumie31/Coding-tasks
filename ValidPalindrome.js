// https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
