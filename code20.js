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
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let res = root.val;
  let count = 0;
  const traversal = (root, k) => {
    if (root === null) {
      return;
    }
    traversal(root.left, k);
    traversal(root.right, k);
    count++;
    if (k === count) {
      res = root.val;
    }
  };
  traversal(root, k);
  return res;
};

let root = generateTreeByTruthyQueue([3, 1, 4, null, 2]);
kthSmallest(root);
