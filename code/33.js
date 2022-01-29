/**
 * 全部套用二叉树的最近公共祖先也可以过
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return null;
  }
  if (root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  // 情况 1
  if (left != null && right != null) {
    return root;
  }
  // 情况 2
  if (left == null && right == null) {
    return null;
  }
  // 情况 3
  return left == null ? right : left;
};

/**
 * 二叉搜索树性质很快
 * root.val > p.val && root.val > q.val, 祖先在 root.left
 * root.val < p.val && root.val < q.val, 祖先在 root.right
 * root.val > p.val && root.val < q.val, root 是祖先
 * root.val > p.val && root.val > q.val, root 是祖先
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return null;
  }
  // p, q 值的互换是精髓, 保证了 p < q
  // 后面也可以借助这个特性减少 if/else 判断
  if (p.val > q.val) {
    return lowestCommonAncestor(root.left, q, p);
  }
  if (root.val >= p.val && root.val <= q.val) {
    return root;
  }
  if (root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return lowestCommonAncestor(root.right, p, q);
  }
};
