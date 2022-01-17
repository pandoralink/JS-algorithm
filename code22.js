/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // 创建二维数组
  let memory = new Array(n + 1);
  for (let i = 0; i < memory.length; i++) {
    memory[i] = new Array(n + 1).fill(0);
  }

  const nums = (start, end) => {
    // 这个终止条件也就是 base case 可能有点难以理解
    // 求解的是 [start,end] 有几种可能，如果 start > end 了
    // 说明 [start,end] 中包含的节点是`空`的，也就是没有
    // 也就是对应空节点，也是一种情况，返回 1
    if (start > end) {
      return 1;
    }
    if (memory[start][end] !== 0) {
      return memory[start][end];
    }
    let res = 0;
    for (let i = start; i <= end; i++) {
      let left = nums(start, i - 1);
      let right = nums(i + 1, end);
      res += left * right;
    }
    memory[start][end] = res;

    return res;
  };
  return nums(1, n);
};

numTrees(4);
