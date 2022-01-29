/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let flag = true;
  const traverse = (p, q) => {
    if (p === null && q !== null) {
      flag = false;
      return;
    }
    if (p !== null && q === null) {
      flag = false;
      return;
    }
    if (p === null && q === null) {
      return;
    }
    if (p.val !== q.val) {
      flag = false;
    }
    traverse(p.left, q.left);
    traverse(p.right, q.right);
  };
  traverse(p, q);

  return flag;
};

/**
 * 东哥巧妙解，少了一个 if 判断
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let flag = true;
  const traverse = (p, q) => {
    if (p === null && q === null) {
      return;
    }
    // && 可以让 || 排除左右都为真的情况
    if (p === null || q === null) {
      flag = false;
      return;
    }
    if (p.val !== q.val) {
      flag = false;
      // 提前剪枝
      return;
    }
    traverse(p.left, q.left);
    traverse(p.right, q.right);
  };
  traverse(p, q);

  return flag;
};

/**
 * 其实还可以再少一个判断
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function (p, q) {
  let flag = true;
  const traverse = (p, q) => {
    if (p === null || q === null) {
      // 如果 p and q 都为 null，flag 仍为 true
      flag = p === q;
      return;
    }
    if (p.val !== q.val) {
      flag = false;
      // 提前剪枝
      return;
    }
    traverse(p.left, q.left);
    traverse(p.right, q.right);
  };
  traverse(p, q);

  return flag;
};

