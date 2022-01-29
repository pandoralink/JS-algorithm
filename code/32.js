/**
 * 用了 Map 高科技
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  const res = new Map();
  let flag = false;
  const traverse = (root) => {
    if (root === null) {
      return;
    }
    traverse(root.left);
    if (res.has(root.val)) {
      flag = true;
      res.set(root.val, res.get(root.val) + 1);
    } else {
      res.set(root.val, 1);
    }
    traverse(root.right);
  };
  traverse(root);
  if (flag) {
    const result = [];
    let max = -1;
    res.forEach((val, key) => {
      max = Math.max(val, max);
    });
    res.forEach((val, key) => {
      if (val === max) {
        result.push(key);
      }
    });
    return result;
  } else {
    return [...res.keys()];
  }
};

/**
 * 使用原生科技
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let res = [];
  let prev = null;
  let curCount = 0;
  let maxCount = 0;
  const traverse = (root) => {
    if (root === null) {
      return;
    }
    traverse(root.left);
    if (prev === null) {
      // 只有根节点会遍历一次，因为二叉搜索树中序遍历
      // 不会出现中间存在 null 的情况
      curCount = 1;
      maxCount = 1;
      res.push(root.val);
    } else {
      if (root.val == prev.val) {
        // root.val 重复的情况
        curCount++;
        if (curCount == maxCount) {
          // root.val 是众数
          res.push(root.val);
        } else if (curCount > maxCount) {
          // 更新众数
          res = [];
          maxCount = curCount;
          res.push(root.val);
        }
      }

      if (root.val != prev.val) {
        // root.val 不重复的情况
        curCount = 1;
        if (curCount == maxCount) {
          res.push(root.val);
        }
      }
    }
    prev = root;
    traverse(root.right);
  };
  traverse(root);
  return res;
};
