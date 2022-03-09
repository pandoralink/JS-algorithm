var advantageCount = function(nums1, nums2) {
  const nums2Copy = [...nums2].map((item,index) => [item,index]);
  nums2Copy.sort((a,b) => b[0] - a[0]);
  nums1.sort();
  let left = 0, right = nums1.length - 1, i = 0;
  const res = new Array(nums1.length).fill(0);
  while(i < nums2Copy.length) {
      if(nums1[left] > nums2Copy[i][0]) {
          res[nums2Copy[i][1]] = nums1[left];
          left++;
      }
      else {
          res[nums2Copy[i][1]] = nums1[right];
          right--;
      }
      i++;
  }
  return res;
};