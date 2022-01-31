/**
 * 用了 Set 高科技
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  const set = new Set();
  const traverse = (root) => {
    if (root === null) {
      return;
    }
    set.add(root.val);
    traverse(root.left);
    traverse(root.right);
  };
  traverse(root);
  const arr = [...set];
  arr.sort();
  return arr.length > 1 ? arr[1] : -1;
};

/**
 * 东哥总是能把题目要考察的点准确把握
 */
var findSecondMinimumValue = (root) => {
  if (root.left == null && root.right == null) {
    return -1;
  }
  // 子节点数只能为 2 || 0, 排除 0 的情况后, left and right 必然不为空
  // 左右子节点中不同于 root.val 的那个值可能是第二小的值
  let left = root.left.val,
    right = root.right.val;
  // 如果左右子节点都等于 root.val，则去左右子树递归寻找第二小的值
  // 下面肯定会进入一个，因为 root.val = min(root.left.val, root.right.val)
  if (root.val === root.left.val) {
    left = findSecondMinimumValue(root.left);
  }
  if (root.val === root.right.val) {
    right = findSecondMinimumValue(root.right);
  }
  if (left === -1) {
    return right;
  }
  if (right === -1) {
    return left;
  }
  // 如果左右子树都找到一个第二小的值，更小的那个是整棵树的第二小元素
  return Math.min(left, right);
};
