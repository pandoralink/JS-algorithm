/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function (arr) {
  let result = arr.map((item) => 0);
  let distances = 0;
  for (let i = 0; i < arr.length; i++) {
    distances = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i] && j !== i) {
        distances += Math.abs(j - i);
      }
    }
    result[i] = distances;
  }
  return result;
};

/**
 * 傻子解法优化
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function (arr) {
  let result = arr.map((item) => 0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        result[i] += Math.abs(i - j);
        result[j] += Math.abs(j - i);
      }
    }
  }
  return result;
};

/**
 * 傻子解法优化
 * 空间换时间
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function (arr) {
  let result = arr.map((item) => 0);
  let numMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    let key = numMap.get(arr[i]);
    if (key) {
      key.forEach((item) => {
        result[item] += Math.abs(item - i);
        result[i] += Math.abs(i - item);
      });
      // let temp = key.map(item => Math.abs(i - item));
      // result[i] += temp.reduce((prev,current) => prev + current);
      key.push(i);
      numMap.set(arr[i], key);
    } else {
      numMap.set(arr[i], [i]);
    }
    // for (let j = i + 1; j < arr.length; j++) {
    //   if (arr[j] === arr[i]) {
    //     result[i] += Math.abs(i - j);
    //     result[j] += Math.abs(j - i);
    //   }
    // }
  }
  return result;
};
