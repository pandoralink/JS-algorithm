/**
 * 利用中序遍历是二叉搜索树升序结果的特性
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
  const traverse = (nums,start,end) => {
      if(start>end) {
          return null;
      }
      let rootIndex = parseInt((end + start)/2);
      let node = new TreeNode(nums[rootIndex]);
      let left = traverse(nums,start,rootIndex-1);
      let right = traverse(nums,rootIndex+1,end);
      node.left = left;
      node.right = right;
      return node;
  }
  return traverse(nums,0,nums.length-1);
};