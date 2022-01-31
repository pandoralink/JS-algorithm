/**
 * 使用字符串模拟树型的方法比较判断
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const getSubStr = (root) => {
    if (root === null) {
      return "";
    }
    let left = getSubStr(root.left);
    let right = getSubStr(root.right);
    return root.val + "," + left + "," + right;
  };
  let subStr = getSubStr(subRoot);
  let flag = false;
  const traverse = (root) => {
    if (root === null) {
      return "";
    }
    let left = traverse(root.left);
    let right = traverse(root.right);
    let res = root.val + "," + left + "," + right;
    if (res === subStr) {
      flag = true;
      return;
    }
    return res;
  };
  traverse(root);
  return flag;
};

/**
 * 东哥使用每个节点都和子节点判断是否相同的方法
 * 我认为是字符串判断的复杂度更小
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const isSameTree = (p, q) => {
    if (p === null && q === null) {
      return true;
    }
    // && 可以让 || 排除左右都为真的情况
    if (p === null || q === null) {
      return false;
    }
    if (p.val !== q.val) {
      return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  };
  const traverse = (root) => {
    if (root === null) {
      // 就是有没有一种可能 subRoot 是空的呢？
      return subRoot === null;
    }
    if (isSameTree(root, subRoot)) {
      return true;
    }
    return traverse(root.left) || traverse(root.right);
  };
  return traverse(root);
};
