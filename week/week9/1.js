/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
  let res = Infinity;
  let index = -1;
  const memo = new Array(edges.length)
    .fill(0)
    .map(() => new Array(edges.length).fill(-1));
  for (let i = 0; i < edges.length; i++) {
    const path1 = node1 === i ? 0 : traverse(edges, node1, i, 0, memo);
    const path2 = node2 === i ? 0 : traverse(edges, node2, i, 0, memo);
    if (![path1, path2].includes(Infinity) && Math.max(path1, path2) < res) {
      index = i;
      res = Math.max(path1, path2);
    }
  }
  return index;
};
function traverse(edges, node, target, length, memo) {
  if (node === target) {
    return length;
  } else if (node === -1 || length >= edges.length - 1) {
    return Infinity;
  } else {
    if (memo[node][target] != -1) {
      return memo[node][target] + length;
    }
    memo[node][target] = traverse(edges, edges[node], target, length + 1, memo);
    return memo[node][target];
  }
}
closestMeetingNode([1, 0], 0, 1);
