import { generateTreeByTruthyQueue, TreeNode } from "../lib/Tree.js";

/**
 * 递归后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let result = [];
  const traversal = (root) => {
    if (root === null) {
      return;
    }
    traversal(root.left);
    traversal(root.right);
    result.push(root.val);
  };
  traversal(root);
  return result;
};

/**
 * 迭代后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  // 模拟系统栈
  let result = [];
  const traversal = (root) => {
    const res = [];
    let visited = new TreeNode(Number.MIN_SAFE_INTEGER);

    pushAllLeft(root);

    while (result.length !== 0) {
      let node = result[result.length - 1];

      // node.left === null 和 node.right === null 相当于 base case
      if (
        (node.left === null || node.left === visited) &&
        node.right !== visited
      ) {
        pushAllLeft(node.right);
      }
      if (node.right === null || node.right === visited) {
        res.push(node.val);
        visited = result.pop();
      }
    }

    return res;
  };
  const pushAllLeft = (root) => {
    while (root !== null) {
      result.push(root);
      root = root.left;
    }
  };

  return traversal(root);
};

const root = generateTreeByTruthyQueue([1,null,2,3]);
postorderTraversal(root);
