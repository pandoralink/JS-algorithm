/**
 * 东哥的解法有点超纲了，明天再看一下
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
  const getStr = (root) => {
      let res = "";
      const traverse = (root) => {
          if(root === null) {
              return;
          }
          traverse(root.left);
          traverse(root.right);
          if(root.left === null && root.right === null) {
              res += root.val + ","; 
          }
      }
      traverse(root);
      return res;
  }
  if(getStr(root1) === getStr(root2)) return true;
  else return false;
};