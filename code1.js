/**
 * example input
 * 1. merge([1,2,3,0,0,0],3,[4,5,6],3); // nums2 全被放在 nums1 上
 * 2. merge([1,3,4,0,0,0],3,[2,5,6],3); // nums2 有比 nums1 小的元素
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1, p2 = n - 1;
  // tail 指向当前需要替换的元素
  let tail = m + n - 1;
  var cur;
  while (p1 >= 0 || p2 >= 0) {
      if (p1 === -1) {
          cur = nums2[p2--];
      } else if (p2 === -1) {
          cur = nums1[p1--];
      } else if (nums1[p1] > nums2[p2]) {
          cur = nums1[p1--];
      } else {
          cur = nums2[p2--];
      }
      nums1[tail--] = cur;
  }
};

merge([1,3,4,0,0,0],3,[2,5,6],3);