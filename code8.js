function factorial(n) {
  let result = 1;
  while (n > 0) {
    result = result * n;
    n--;
  }

  return result;
}

/**
 * 傻子解法
 * 求组合问题
 * 首先 1 + 1...+ 1 肯定行
 * 然后 1 + 1...+ 2
 * Math.floor(n/2) -> 得到有多少种 2 的组合方法
 * 比如为 2，则有一种包含一个 2 的组合，一种包含两个 2 的组合
 * 一个 2 时，组合元素为 n - 2，两个 2 时，组合元素为 n - 2*2
 * 假设 n = 4，那么就是 1,1,2 and 2,2，求这种两种组合的排列数
 * 假设 n = 5，那么就是 1,1,1,2 and 1,2,2，求这两种组合 2 的排列数
 * 其实就是求组合数，n 个数里面抽 x个 （x 个指的是 2 的个数），C(n,x);
 * 时间复杂度为 O(n^2)，阶乘的计算也是 n
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 全 1 的可能
  let result = 1;
  let twoNum = Math.floor(n / 2);
  while (twoNum > 0) {
    // 当前组合元素总数
    let currentTotalElement = n - twoNum;
    result +=
      factorial(currentTotalElement) /
      (factorial(twoNum) * factorial(currentTotalElement - twoNum));
    twoNum--;
  }

  return result;
};

/**
 * 这条题的官方解法中 TypeScript 和 JavaScript 的解法同时存在
 * 动态规划 + 斐波那契数列 解法
 */
 var climbStairs = function(n) {
  let p = 0, q = 0, r = 1;
  for (let i = 1; i <= n; ++i) {
      p = q;
      q = r;
      r = p + q;
  }
  return r;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
