import { generateTreeByTruthyQueue, TreeNode } from "./lib/Tree.js";

/**
 * 后续遍历解法，为什么先采用后序遍历去解这条题
 * 是因为后序遍历序列化比较好写
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (root === null) {
    return "#" + ",";
  }
  let left = serialize(root.left);
  let right = serialize(root.right);
  return left + right + root.val + ",";
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let arr = data.split(",");
  arr = arr.filter((item) => item !== "");
  const build = (arr) => {
    // arr.length 是给 arr 一开始就为 0 准备的
    // 否则函数都会在 last === # 处结束
    if (arr.length === 0) {
      return null;
    }
    let last = arr.pop();
    if (last === "#") {
      return null;
    }
    let node = new TreeNode(last);
    node.right = build(arr);
    node.left = build(arr);

    return node;
  };
  return build(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// let root = generateTreeByTruthyQueue([1, 2, 3, null, null, 4, 5]);
// console.log(deserialize(serialize(root)));

// ------- 分割线 --------

/**
 * 前序遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = "";
  const traverse = (root) => {
    if (root === null) {
      return (res += "#" + ",");
    }
    res += root.val + ",";
    traverse(root.left);
    traverse(root.right);
  };
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let arr = data.split(",");
  arr = arr.filter((item) => item !== "");

  const build = (arr) => {
    // arr.length 是给 arr 一开始就为 0 准备的
    // 否则函数都会在 last === # 处结束
    if (arr.length === 0) {
      return null;
    }
    let last = arr.pop();
    if (last === "#") {
      return null;
    }
    let node = new TreeNode(last);
    node.left = build(arr);
    node.right = build(arr);

    return node;
  };
  return build(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// let root = generateTreeByTruthyQueue([1, 2, 3, null, null, 4, 5]);
// console.log(deserialize(serialize(root)));

// ------- 分割线 --------

/**
 * 层次遍历
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (root === null) {
    return "";
  }
  let res = "";
  let nodes = [root];
  while (nodes.length !== 0) {
    let node = nodes.shift();

    // 与一般的层次遍历不同
    // 空节点也需要记录
    if (node === null) {
      res += "#,";
      continue;
    }
    res += node.val + ",";
    nodes.push(node.left);
    nodes.push(node.right);
  }
  return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "") {
    return null;
  }
  let arr = data.split(",");
  arr = arr.filter((item) => item !== "");

  let node = new TreeNode(arr[0], null, null);
  let nodes = [node];
  // 也可以改用 arr.shift() 的方式，arr[i++] 对我来说还是太超前了
  for (let i = 1; i < arr.length; ) {
    const node = nodes.shift();

    let left = arr[i++];
    if (left !== "#") {
      node.left = new TreeNode(left);
      nodes.push(node.left);
    } else {
      node.left = null;
    }
    let right = arr[i++];
    if (right !== "#") {
      node.right = new TreeNode(right);
      nodes.push(node.right);
    } else {
      node.right = null;
    }
  }
  return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let root = generateTreeByTruthyQueue([1, 2, 3, null, null, 4, 5]);
console.log(deserialize(serialize(root)));
