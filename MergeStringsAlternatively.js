// https://leetcode.com/problems/merge-strings-alternately/description

var mergeAlternately = function (word1, word2) {
  let merged = '';
  let maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (word1[i]) merged += word1[i];
    if (word2[i]) merged += word2[i];
  }

  return merged;
};
