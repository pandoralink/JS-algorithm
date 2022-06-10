var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return left;
};
searchInsert([1, 3, 5, 6], 5);
