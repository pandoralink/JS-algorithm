/**
 * 通过`二叉树是否存在目标节点`得出来的做法
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let res = null;
  const traverse = (root) => {
    if (root === null) {
      return false;
    }
    let left = traverse(root.left);
    let right = traverse(root.right);
    if (left && right) {
      res = root;
      return true;
    }
    if (root === p || root === q) {
      if (left || right) {
        res = root;
      }
      return true;
    }
    if (left || right) {
      return true;
    }
    return false;
  };
  traverse(root);
  return res;
};

/**
 * 东哥的思路，与上面的差不多，不过
 * 要更加精炼和易于理解
 * 而且能够提前剪枝
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return null;
  }
  if (root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  // 情况 1
  if (left != null && right != null) {
    return root;
  }
  // 情况 2
  if (left == null && right == null) {
    return null;
  }
  // 情况 3
  return left == null ? right : left;
};
