import { TreeNode } from "./lib/Tree.js";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  const build = (preorder, preStart, preEnd, postorder, postStart, postEnd) => {
    if (preStart > preEnd) {
      return null;
    }
    // 由于后面需要取出 preorder[preStart + 1]
    // 所以对于 preStart === preEnd 的情况
    // 即 preStart + 1 > preEnd 的情况
    // 需要优先处理
    if (preStart === preEnd) {
      return new TreeNode(preorder[preStart]);
    }

    let rootVal = preorder[preStart];
    let leftRootVal = preorder[preStart + 1];
    // 后序遍历的左子树的位置
    let postOrderLeftTreeIndex = 0;
    for (let i = postStart; i <= postEnd; i++) {
      if (postorder[i] === leftRootVal) {
        postOrderLeftTreeIndex = i;
        break;
      }
    }
    // 注意中序遍历的起始点和终结点是会变化的
    // 不能简单的把 inOrderRootIndex 视作为 `左子树节点总数`
    // 还需减去此时数组的起始点
    let leftSize = postOrderLeftTreeIndex - postStart + 1;

    let root = new TreeNode(rootVal);

    root.left = build(
      preorder,
      preStart + 1,
      preStart + leftSize,
      postorder,
      postStart,
      postOrderLeftTreeIndex
    );
    // labuladong 中这里的 postEnd 没有减一
    // 但仍然能够通过，是因为遍历数组满足不同整数的条件
    // 并且 postEnd 主要作用是遍历后序遍历数组有没有和
    // 前序遍历数组相同的，多出一个也不会影响 postOrderLeftTreeIndex 的判断
    root.right = build(
      preorder,
      preStart + leftSize + 1,
      preEnd,
      postorder,
      postOrderLeftTreeIndex + 1,
      postEnd - 1
    );
    return root;
  };
  const root = build(
    preorder,
    0,
    preorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );
  return root;
};

constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]);
