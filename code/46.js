import { generateTreeByTruthyQueue } from "../lib/Tree.js";

let root = generateTreeByTruthyQueue([1, 0, 1, 0, 1, 0, 1]);
sumRootToLeaf(root);

/**
 * 位运算符可太牛了
 */
var sumRootToLeaf = function (root) {
  let res = 0;
  let path = 0;
  const traverse = (root) => {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      res += (path << 1) | root.val;
      return;
    }
    path = (path << 1) | root.val;
    traverse(root.left);
    traverse(root.right);
    path = path >> 1;
  };
  traverse(root);
  return res;
};
