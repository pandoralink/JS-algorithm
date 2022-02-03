/**
 * 递归 O(n)
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let res = 0;
  const traverse = (root) => {
    if (root === null) {
      return;
    }
    traverse(root.left);
    traverse(root.right);
    res += 1;
  };
  traverse(root);
  return res;
};

/**
 * 递归 O(n) -- 优雅版
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (root === null) {
    return 0;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
};

/**
 * 利用满二叉树和完全二叉树的特性
 * 完全二叉树两棵子树中必有一个是满二叉树
 * 满二叉树的节点总数等于 2^k - 1
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let l = root,
    r = root;
  let ld = 0,
    rd = 0;
  while (l !== null) {
    l = l.left;
    ld++;
  }
  while (r !== null) {
    r = r.right;
    rd++;
  }
  if (ld === rd) {
    return Math.pow(2, ld) - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
};
