import { generateTreeByTruthyQueue, TreeNode } from "../lib/Tree.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let res = Number.MAX_SAFE_INTEGER;
  // temp 初始值为最小值而不是 0 是为了防止
  // root.val - temp = 0 - 0 的情况
  let temp = Number.MIN_SAFE_INTEGER;
  const traverse = (root) => {
    if (root === null) {
      return;
    }
    traverse(root.left);
    res = Math.min(root.val - temp, res);
    temp = root.val;
    traverse(root.right);
  };
  traverse(root);
  return res;
};

let root = generateTreeByTruthyQueue([1, 0, 48, null, null, 12, 49]);
getMinimumDifference(root);

/**
 * 东哥使用记录前一个节点，并 if 排除
 * 掉初始化情况
 */
var getMinimumDifference = function (root) {
  let res = Number.MAX_SAFE_INTEGER;
  let prev = null;
  const traverse = (root) => {
    if (root === null) {
      return;
    }

    traverse(root.left);
    if (prev !== null) {
      res = Math.min(root.val - prev.val, res);
    }
    prev = root;
    traverse(root.right);
  };
  traverse(root);
  return res;
};
