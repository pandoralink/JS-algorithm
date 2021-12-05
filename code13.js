import { generateTreeByQueue } from "./lib/Tree.js";

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (root === null) {
    return [];
  }
  let result = [];
  result = result.concat(inorderTraversal(root.left));
  result = result.concat(root.val);
  result = result.concat(inorderTraversal(root.right));

  return result;
};

/**
 * 力扣的官方递归
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res;
};

/**
 * 力扣的迭代解法
 * 迭代 yyds
 */
var inorderTraversal = function (root) {
  const res = [];
  const stk = [];
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};

/**
 * 力扣的 Morris 中序遍历
 * 不是很看得懂，先不看了
 */
var inorderTraversal = function (root) {
  const res = [];
  let predecessor = null;

  while (root) {
    if (root.left) {
      // predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
      predecessor = root.left;
      while (predecessor.right && predecessor.right !== root) {
        predecessor = predecessor.right;
      }

      // 让 predecessor 的右指针指向 root，继续遍历左子树
      if (!predecessor.right) {
        predecessor.right = root;
        root = root.left;
      }
      // 说明左子树已经访问完了，我们需要断开链接
      else {
        res.push(root.val);
        predecessor.right = null;
        root = root.right;
      }
    }
    // 如果没有左孩子，则直接访问右孩子
    else {
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
};

let root = generateTreeByQueue([1, null, 2, 3]);
inorderTraversal(root);
