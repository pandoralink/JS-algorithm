import { generateTreeByTruthyQueue } from "./lib/Tree.js";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 简简单单一个广度优先搜索就出来了喔
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  const nodeQueue = [root];
  const nodeSumQueue = [root.val];
  const result = [];
  while (nodeQueue.length !== 0) {
    const node = nodeQueue.pop();
    const val = nodeSumQueue.pop() + "";
    if (node.left === null && node.right === null) {
      result.push(val);
    }
    if (node.left !== null) {
      nodeQueue.push(node.left);
      nodeSumQueue.push(val + node.left.val);
    }
    if (node.right !== null) {
      nodeQueue.push(node.right);
      nodeSumQueue.push(val + node.right.val);
    }
  }
  let sum = 0;
  result.forEach((item) => {
    sum += parseInt(item);
  });
  return sum;
};

let root = generateTreeByTruthyQueue([1, 2, 3]);
sumNumbers(root);
