// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

var kidsWithCandies = function (candies, extraCandies) {
  let result = [],
    largest = Math.max(...candies);
  candies.forEach((candy) => {
    if (candy + extraCandies >= largest) {
      result.push(true);
    } else {
      result.push(false);
    }
  });
  return result;
};
