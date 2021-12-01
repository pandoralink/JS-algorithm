/**
 * 感觉是动态规划题目，又好像是贪心
 * 傻子解法会超时
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 确保交易不成功的值为 0
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    let tempMaxProfit = Number.MIN_SAFE_INTEGER;
    for (let j = i + 1; j < prices.length; j++) {
      let tempResult = prices[j] - prices[i];
      if (tempResult > tempMaxProfit) {
        tempMaxProfit = tempResult;
      }
    }
    if (tempMaxProfit > maxProfit) {
      maxProfit = tempMaxProfit;
    }
  }
  return maxProfit;
};

/**
 * 自写动态规划解法
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;
  prices.forEach((item) => {
    if (item < min) {
      min = item;
    }
    let tempResult = item - min;
    if (tempResult > max) {
      max = tempResult;
    }
  });
  return max;
};

/**
 * 优化
 * 说实话这个优化不如上面那个
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;
  prices.forEach((item) => {
    min = Math.min(item,min)
    max = Math.max(item - min, max);
  });
  return max;
};