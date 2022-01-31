/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
  const result = [];
  const traverse = (root) => {
    if (root === null) {
      return 0;
    }
    let left = traverse(root.left);
    let right = traverse(root.right);
    result.push(Math.abs(left - right));
    return left + right + root.val;
  };
  traverse(root);
  let res = 0;
  result.forEach((item) => (res += item));
  return res;
};

/**
 * 我怎么就没想到直接加呢？
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
  let res = 0;
  const traverse = (root) => {
    if (root === null) {
      return 0;
    }
    let left = traverse(root.left);
    let right = traverse(root.right);
    res += Math.abs(left - right);
    return left + right + root.val;
  };
  traverse(root);
  return res;
};
