var minSubArrayLen = function (target, nums) {
  let windowSum = 0;
  let l = 0,
    r = 0;
  let res = Infinity;
  while (r < nums.length) {
    windowSum += nums[r];
    r++;
    while (windowSum >= target) {
      res = Math.min(r - l, res);
      windowSum -= nums[l];
      l++;
    }
  }
  return res === Infinity ? 0 : res;
};
minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
