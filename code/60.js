/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  const res = [];
  function traverse(root, sum, paths) {
    if (!root) return;
    sum = sum + root.val;
    paths.push(root.val);
    if (!root.left && !root.right && sum === target) res.push(paths.slice());
    traverse(root.left, sum, paths);
    traverse(root.right, sum, paths);
    paths.pop();
  }
  traverse(root, 0, []);
  return res;
};
// 时间复杂度为 O(n^2)，DFS 时间复杂度为 O(n)，path.slice() 数组复制的时间复杂度为 O(n)，因此最坏情况下会是 O(n^2)
// 比如这种树
//    0
//    0
//    0
//    0
//  0   0
// 0 0 0 0