/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    res.push(fun(nums, queries[i]));
  }
  return res;
};
function fun(nums, target) {
  let l = 0,
    r = 0;
  let max = 0,
    currLen = 0,
    sum = 0;
  while (r < nums.length) {
    const num = nums[r];
    sum += num;
    r++;
    if(sum <= target) {
      currLen++;
    }
    while (sum > target) {
      max = Math.max(r - l, max);
      const num = nums[l];
      sum -= num;
      l++;
      if (sum < target) {
        currLen++;
      } else {
        currLen--;
      }
    }
  }
  return Math.max(currLen, max);
}
answerQueries([4, 5, 2, 1], [3, 10, 21]);
answerQueries([2, 3, 4, 5], [1]);
