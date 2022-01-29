/**
 * 对于输入 `[2,null,3,null,4,null,5,null,6]`
 * ++depth 得到的结果是 9 而 depth + 1 是 5
 * 可是两者是相同的
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let res = Number.MAX_SAFE_INTEGER;
  const traverse = (root, depth) => {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      res = Math.min(depth, res);
    }
    traverse(root.left, depth + 1);
    traverse(root.right, depth + 1);
  }
  traverse(root, 1);
  return res;
};

/**
 * 层序遍历
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  const res = [];
  const nodes = [root];
  let depth = 1;
  while (nodes.length > 0) {
    const size = nodes.length;
    for (let i = 0; i < size; i++) {
      let node = nodes.shift();
      if (node.left === null && node.right === null) {
        return depth;
      }
      if (node.left !== null) {
        nodes.push(node.left);
      }
      if (node.right !== null) {
        nodes.push(node.right);
      }
    }
    depth++;
  }
  return depth;
};