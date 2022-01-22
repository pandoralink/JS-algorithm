/**
 * 框架一解法
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let min = Number.MIN_SAFE_INTEGER;
  let res = true;
  const traversal = (root) => {
    if (root === null) {
      return;
    }
    // 一旦作用域外部的 res 被判定为 false
    // 子树及树本身不是二叉搜索树，提前剪枝
    if (res === false) {
      return;
    }
    traversal(root.left);
    if (root.val > min) {
      min = root.val;
    } else {
      res = false;
      // 部分剪枝
      return;
    }
    traversal(root.right);
  };
  traversal(root);
  return res;
};

/**
 * 框架二解法
 * 这个思路非常牛逼，重点在于约束的传递，也就是 min 和 max
 * 约束传递就是自顶向下的递归，还是有点难以理解的
 * 缺点是需要遍历完整一遍树，当然也可以提前剪枝
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const isValid = (root, min, max) => {
    if (root === null) {
      return true;
    }
    if (min !== null && root.val < min) return false;
    if (max !== null && root.val > max) return false;

    return (
      isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
    );
  };
  return isValid(root, null, null);
};
