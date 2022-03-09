var advantageCount = function (nums1, nums2) {
  const nums2Copy = [...nums2].map((item, index) => [item, index]);
  nums2Copy.sort((a, b) => b[0] - a[0]);
  nums1.sort((a, b) => a - b);
  let left = 0,
    right = nums1.length - 1,
    i = 0;
  const res = new Array(nums1.length).fill(0);
  while (i < nums2Copy.length) {
    if (nums1[right] > nums2Copy[i][0]) {
      res[nums2Copy[i][1]] = nums1[right];
      right--;
    } else {
      res[nums2Copy[i][1]] = nums1[left];
      left++;
    }
    i++;
  }
  return res;
};

advantageCount([2, 7, 11, 15], [1, 10, 4, 11]);
advantageCount([12, 24, 8, 32], [13, 25, 32, 11]);
