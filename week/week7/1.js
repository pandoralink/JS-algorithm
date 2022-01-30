/**
 * 先排序，因为 res * 2 是递增
 * 时间复杂度：n * logn
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  let res = original;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === res) {
      res = res * 2;
    }
  }
  return res;
};

findFinalValue([5, 3, 6, 1, 12], 3);

/**
 * 利用 Set 的特性，如果存在就乘二
 * 然后再次寻找
 */
var findFinalValue = function (nums, original) {
  let set = new Set(nums);
  while (set.has(original)) {
    original = original * 2;
  }
  return original;
};
