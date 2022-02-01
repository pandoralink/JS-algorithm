/**
 * 遍历-递归
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let res = 0;
  const traverse = (root) => {
    if (root === null) {
      return;
    }
    if (root.val < low) {
      traverse(root.right);
    } else if (root.val > high) {
      traverse(root.left);
    } else {
      res += root.val;
      traverse(root.left);
      traverse(root.right);
    }
  };
  traverse(root);
  return res;
};

/**
 * 分解问题-递归
 * 总是想不出来这种递归，是不是意为着
 * 我的动态规划会很差
 */
var rangeSumBST = function (root, low, high) {
  if (root === null) return 0;
  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  } else if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  } else {
    return (
      root.val +
      traverse(root.left, low, high) +
      traverse(root.right, low, high)
    );
  }
};
