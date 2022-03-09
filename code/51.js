/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  const f = (weights, x) => {
    let res = 0,
      temp = 0;
    for (const weight of weights) {
      if (temp + weight > x) {
        res++;
        temp = 0;
      }
      temp += weight;
    }
    // 因为累加到最后，必然有剩余的未装船，但也算是一天
    return res + 1;
  };
  // let left = 1,
  //   right = 500;
  // 没有用上面这个是因为，船的承载最大值必须满足包裹累加值，最小值也需要满足最大值，必须得装走一件
  let left = weights.reduce((a, b) => a + b),
    right = Math.max(...weights);
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (f(weights, mid) === days) {
      right = mid - 1;
    } else if (f(weights, mid) < days) {
      right = mid - 1;
    } else if (f(weights, mid) > days) {
      left = mid + 1;
    }
  }
  return left;
};

shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
