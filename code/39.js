/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 || !root2) {
    return root1 ? root1 : root2;
  }
  const traverse = (r1, r2) => {
    if (r1 === null && r2 === null) {
      return null;
    }
    if (r1 === null || r2 === null) {
      return r1 ? r1 : r2;
    }
    let node = new TreeNode(r1.val + r2.val);
    let left = traverse(r1.left, r2.left);
    let right = traverse(r1.right, r2.right);
    node.left = left;
    node.right = right;
    return node;
  };
  return traverse(root1, root2);
};

/**
 * 东哥的解法总是超出我的意料
 */
var mergeTrees = function (root1, root2) {
  if (root1 == null) {
    return root2;
  }
  if (root2 == null) {
    return root1;
  }
  // 两棵树都有的节点，叠加节点值
  root1.val += root2.val;
  // 递归合并左右子树
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};
