var rotate = function (matrix) {
  const n = matrix.length; // 因为 n x n 矩阵
  const temp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      temp[j][n - i - 1] = matrix[i][j];
    }
  }
  return temp;
};

rotate([[1,2,3],[4,5,6],[7,8,9]]);