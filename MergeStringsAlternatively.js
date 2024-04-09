// https://leetcode.com/problems/merge-strings-alternately/description
/*
  You are given two strings word1 and word2. Merge the strings by adding 
  letters in alternating order, starting with word1. If a string is longer than the other, 
  append the additional letters onto the end of the merged string.

  Return the merged string.
*/

var mergeAlternately = function (word1, word2) {
  let merged = '';
  let maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (word1[i]) merged += word1[i];
    if (word2[i]) merged += word2[i];
  }

  return merged;
};
