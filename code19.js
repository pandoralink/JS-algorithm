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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const map = new Map();
  const res = [];
  const traverse = (root) => {
    if (root === null) {
      return "#";
    }
    let left = traverse(root.left);
    let right = traverse(root.right);
    // 一定要加入 `,` 分割，区分子树和根节点
    // 后序遍历中就有这个例子会判断错误
    // [10,2,22,1,12,1,1]
    // 不加 `,`
    // 左子树和右子树都为：##1##122
    // 加 `,`
    // 左：##1,##1,22 右：##1,##12,2
    // 前序遍历同理
    let subtree = left + "," + right + "," + root.val;
    let oldvalue = map.get(subtree);
    oldvalue = oldvalue ? oldvalue : 0;
    if (oldvalue === 1) {
      // 已经有过子树
      res.push(root);
    }
    map.set(subtree, oldvalue + 1);
    return subtree;
  };
  traverse(root);

  return res;
};

let root = generateTreeByTruthyQueue([10, 2, 22, 1, 12, 1, 1]);
findDuplicateSubtrees(root);
