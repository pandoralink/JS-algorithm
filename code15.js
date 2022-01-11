/**
 * 前序遍历求解，如果出现等于 targetSum 的值就将递归外部的值置为 true
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let result = false;
  const res = [];
  const backOrder = (root, sum) => {
    if (!root) {
      return;
    }
    sum += root.val;
    if (sum === targetSum && root.left === null && root.right === null) {
      result = true;
    }
    backOrder(root.left, sum);
    backOrder(root.right, sum);
  };
  backOrder(root, 0);
  return result;
};

/**
 * 力扣递归解法
 * @param {TreeNode} root
 * @param {number} targetSum
 * @returns {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }
  if (root.left === null && root.right === null) {
    return sum === root.val;
  }
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};

/**
 * 广度优先搜索
 * @param {TreeNode} root
 * @param {number} targetSum
 * @returns {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }
  let queueNode = [root];
  let queueSum = [root.val];
  while (queueNode.length !== 0) {
    let node = queueNode.shift();
    let sum = queueSum.shift();
    if (node.left === null && node.right === null && sum === targetSum) {
      return true;
    }
    if (node.left !== null) {
      queueNode.push(node.left);
      queueSum.push(node.left.val + sum);
    }
    if (node.right !== null) {
      queueNode.push(node.right);
      queueSum.push(node.right.val + sum);
    }
  }
  return false;
};
