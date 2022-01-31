/**
 * hashSet 的解法
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let res = false;
  let set = new Set();
  const traverse = (root) => {
    if (root === null) {
      return;
    }
    if (set.has(k - root.val)) {
      res = true;
    }
    set.add(root.val);
    traverse(root.left);
    traverse(root.right);
  };
  traverse(root);
  return res;
};

/**
 * 东哥的双指针解法
 */
var findTarget = function (root, k) {
  const nodeValues = [];
  const traverse = (root) => {
    if (root === null) {
      return;
    }
    traverse(root.left);
    nodeValues.add(root.val);
    traverse(root.right);
  };
  traverse(root);
  let l = 0,
    r = nodeValues.length - 1;
  let sum = 0;
  while (l < r) {
    sum = nodeValues[l] + nodeValues[r];
    if (sum < k) {
      i++;
    } else if (sum > k) {
      j--;
    } else {
      return true;
    }
  }
  return false;
};
