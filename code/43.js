/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
  if(root === null) {
      return null;
  }
  let left = increasingBST(root.left);
  let right = increasingBST(root.right);
  let leftFlag = left ? true : false;
  if(leftFlag) {
      let rootVal = root.val;
      let tip = left;
      root.val = left.val;
      while(left.right !== null) {
          left.val = left.right.val;
          left = left.right;
      }
      left.val = rootVal;
      left.right = right;
      root.left = null;
      root.right = tip;
  }
  return root;
};

/**
 * 同样的思路，labuladong 的就要更加简洁
 */
 var increasingBST = function(root) {
  if(root === null) {
      return null;
  }
  let left = increasingBST(root.left);
  root.left = null;
  let right = increasingBST(root.right);
  root.right = right;
  if(left ? true : false) {
      let p = left;
      while(p.right !== null) {
          p = p.right;
      }
      p.right = root;
      return left;
  }
  return root;
};