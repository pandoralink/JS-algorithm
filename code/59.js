/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  const set = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      set.add(matrix[i][j]);
    }
  }
  return set.has(target);
};

findNumberIn2DArray([[-1, 3]], 3);
findNumberIn2DArray([[5], [6]], 6);

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  let rows = matrix.length,
    columns = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};

var findNumberIn2DArray = function (matrix, target) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  const rows = matrix.length,
    columns = matrix[0].length;
  let row = 0,
    column = columns - 1;
  while (row < rows && column >= 0) {
    const num = matrix[row][column];
    if (num === target) {
      return true;
    } else if (num > target) {
      column--;
    } else {
      row++;
    }
  }
  return false;
};
