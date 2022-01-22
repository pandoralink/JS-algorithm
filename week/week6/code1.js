/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  if (cost.length === 1) {
    return cost[0];
  }
  let costCopy = cost.concat();
  costCopy.sort((a, b) => a - b);
  let result = 0;
  for (let i = costCopy.length - 1; i >= 0; i--) {
    result += costCopy[i] + (costCopy[i - 1] || 0);
    i = i - 2;
  }

  return result;
};

minimumCost([3, 3, 3, 1]);
minimumCost([3, 1, 9, 1, 6, 10, 9, 8]);
