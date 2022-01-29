/**
 * 类似`相同的树`，不过需要自顶向下并结合轴对称
 * 的性质去理解
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  if(root === null) {
      return true;
  }
  const traverse = (left,right) => {
      if(left === null || right === null) {
          return left === right;
      }
      if(left.val !== right.val) {
          return false;
      }
      return traverse(left.left,right.right) && traverse(left.right,right.left);
  }
  return traverse(root.left,root.right);
};