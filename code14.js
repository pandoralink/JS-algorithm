import { generateTreeByTruthyQueue } from "./lib/Tree.js";

/**
 * 还是经典的数据结构题
 * 先用中序遍历试试能不能在遍历的同时转换
 * 太晚了，就先不看官方的答案了
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
  const stk = [];
  const result = root;

  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    
    // 在这个时候替换
    let tempNode = root.left;
    root.left = root.right;
    root.right = tempNode;

    root = root.left;
  }
  return result;
};

// leetcode 要求生成树的方法似乎是层次遍历
let root = generateTreeByTruthyQueue([4,2,7,1,3,6,9]);
invertTree(root);