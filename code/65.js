/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = new Array(coins.length + 1).fill(0).map(() => {
    const res = new Array(amount + 1).fill(0);
    res[0] = 1;
    return res;
  });
  for (let i = 1; i <= coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j - coins[i - 1] >= 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[coins.length][amount];
};
change(5, [1, 2, 5]);