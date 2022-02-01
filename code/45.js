import { generateTreeByTruthyQueue } from "../lib/Tree.js";

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let xd = -1;
  let yd = -1;
  let res = false;
  const traverse = (root, d) => {
    if (root === null) {
      return 0;
    }
    let left = traverse(root.left, d + 1);
    let right = traverse(root.right, d + 1);
    if ((left === x && right === y) || (left === y && right === x)) {
      res = false;
    } else if (left === x || right === x) {
      if (yd !== -1 && yd === xd) res = true;
    } else if (left === y || right === y) {
      if (xd !== -1 && yd === xd) res = true;
    }
    if (root.val === x) {
      xd = d;
    }
    if (root.val === y) {
      yd = d;
    }
    return root.val;
  };
  traverse(root, 0);
  return res;
};

let root = generateTreeByTruthyQueue([1, 2, 3, null, 4]);
isCousins(root, 2, 3);

/**
 * 东哥是怎么压缩到怎么短的？
 */
var isCousins = function (root, x, y) {
  let xd = -1;
  let yd = -1;
  let px = null,
    py = null;
  const traverse = (root, d) => {
    if (root === null) {
      return;
    }
    if (root.val === x) {
      xd = d;
      px = root;
    }
    if (root.val === y) {
      yd = d;
      py = root;
    }
    traverse(root.left, d + 1);
    traverse(root.right, d + 1);
  };
  traverse(root, 0);
  if (xd === yd && px !== py) return true;
  else return false;
};
