/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  // path max sum === 10000
  const memo = new Array(matrix.length)
    .fill(0)
    .map((i) => new Array(matrix[0].length).fill(10001));
  dp(matrix, n - 1, n - 1, memo);
  return Math.min(...memo[matrix.length - 1]);
};
function dp(matrix, i, j, memo) {
  if (i < 0 || j < 0 || i >= matrix.length || j > matrix[0].length) {
    // path max sum === 10000
    return 10001;
  }
  if (i === 0) {
    return matrix[0][j];
  }
  if (memo[i][j] !== 10001) {
    return memo[i][j];
  }
  memo[i][j] =
    matrix[i][j] +
    min(
      dp(matrix, i - 1, j, memo),
      dp(matrix, i - 1, j - 1, memo),
      dp(matrix, i - 1, j + 1, memo)
    );
  return memo[i][j];
}
function min(a, b, c) {
  return Math.min(a, Math.min(b, c));
}

minFallingPathSum([
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
]);
