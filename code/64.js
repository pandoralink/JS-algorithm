/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const memo = new Array(s.length).fill(0).map((i, index) => {
    const res = new Array(s.length).fill(0);
    res[index] = 1;
    return res;
  });
  return dp(s, 0, s.length - 1, memo);
};
function dp(s, i, j, memo) {
  if (i > j || i >= s.length || j < 0) {
    return 0;
  }
  if (memo[i][j] !== 0) {
    return memo[i][j];
  }
  if (s[i] === s[j]) {
    memo[i][j] = dp(s, i + 1, j - 1, memo) + 2;
  } else {
    memo[i][j] = Math.max(dp(s, i + 1, j, memo), dp(s, i, j - 1, memo));
  }
  return memo[i][j];
}
longestPalindromeSubseq("bbbab");
