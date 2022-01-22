/**
 * 自顶向下的递归，很容易就超时了
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function (root) {
  // 遍历每个节点，并验证是否是二叉搜索树
  // 是就维护外部作用域的最大键值和
  // 不是就不维护
  let maxSum = 0;
  const traverse = (root) => {
    if (root === null) {
      return;
    }
    let res = isValid(root);
    if (res !== 0) {
      maxSum = Math.max(maxSum, res);
    }
    traverse(root.left);
    traverse(root.right);
  };
  traverse(root);
  return maxSum;
};
const isValid = (root) => {
  let min = Number.MIN_SAFE_INTEGER;
  let flag = true;
  let sum = 0;
  const traverse = (root) => {
    if (root === null) {
      return;
    }
    // 一旦作用域外部的 flag 被判定为 false
    // 子树及树本身不是二叉搜索树，提前剪枝
    if (flag === false) {
      return;
    }
    traverse(root.left);
    if (root.val > min) {
      min = root.val;
    } else {
      flag = false;
      return;
    }
    sum += root.val;
    traverse(root.right);
  };
  traverse(root);
  return flag ? sum : 0;
};

/**
 * 自底向上的递归
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function (root) {
  let maxSum = 0;
  const traverse = (root) => {
    if (root === null) {
      return new Result(
        true,
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
        0
      );
    }
    let left = traverse(root.left);
    let right = traverse(root.right);

    let res = new Result(false);
    if (
      left.flag &&
      right.flag &&
      root.val < right.min &&
      root.val > left.max
    ) {
      res.flag = true;
      res.max = Math.max(root.val, right.max);
      res.min = Math.min(root.val, left.min);
      res.sum = left.sum + right.sum + root.val;
    }
    maxSum = Math.max(res.sum, maxSum);

    return res;
  };
  traverse(root);
  return maxSum;
};
function Result(flag, max, min, sum) {
  this.flag = flag === undefined ? false : flag;
  this.max = max === undefined ? 0 : max;
  this.min = min === undefined ? 0 : min;
  this.sum = sum === undefined ? 0 : sum;
}
