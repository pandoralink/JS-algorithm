/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const twoSum = (nums, start, target) => {
    let l = start,
      r = nums.length - 1;
    const res = [];
    while (l < r) {
      const sum = nums[l] + nums[r];
      const left = nums[l],
        right = nums[r];
      if (sum < target) {
        while (l < r && nums[l] === left) {
          l++;
        }
      } else if (sum > target) {
        while (l < r && nums[r] === right) {
          r--;
        }
      } else {
        res.push([left, right]);
        while (l < r && nums[r] === right) {
          r--;
        }
        while (l < r && nums[l] === left) {
          l++;
        }
      }
    }
    return res;
  };
  const nSum = (nums, n, start, target) => {
    const result = [];
    if (nums.length < n || n < 2) {
      return result;
    }
    if (n === 2) {
      result.push(...twoSum(nums, start, target));
    } else {
      const length = nums.length;
      for (let i = start; i < length - 2; i++) {
        const tempRes = nSum(nums, n - 1, i + 1, target - nums[i]);
        for (const res of tempRes) {
          result.push([nums[i], ...res]);
        }
        while (i < length - 3 && nums[i] === nums[i + 1]) i++;
      }
    }
    return result;
  };
  nums.sort();
  return nSum(nums, 4, 0, target);
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([-1, 0, -5, -2, -2, -4, 0, 1, -2], -9));
