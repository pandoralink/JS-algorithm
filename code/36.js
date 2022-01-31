var sumOfLeftLeaves = function (root) {
  let res = 0;
  const traverse = (root) => {
    if (root === null) {
      return null;
    }
    let left = traverse(root.left);
    traverse(root.right);
    if (left !== null && left.left === null && left.right === null) {
      res += left.val;
    }
    return root;
  };
  traverse(root);
  return res;
};

/**
 * 东哥前序遍历解法
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let res = 0;
  const traverse = (root) => {
    if (root === null) {
      return;
    }
    if (
      root.left !== null &&
      root.left.left === null &&
      root.left.right === null
    ) {
      res += root.left.val;
    }
    traverse(root.left);
    traverse(root.right);
    return;
  };
  traverse(root);
  return res;
};
