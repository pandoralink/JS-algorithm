// 这么喜欢考排列组合？？？

/**
 * 找出字符串的全组合
 * @param {string} arr
 * @returns {number[]}
 */
function combinationFromString(arr) {
  let res = [];
  let s = [];
  for (let i = 0; i < arr.length; i++) {
    s = [];
    s.push(arr[i]);
    for (let j = 0; j < res.length; j++) {
      s.push(res[j] + arr[i]);
    }
    res.push(...s); //防止爆堆内存，不要浅拷贝
  }
  return res;
}

/**
 * 从数字数组中找出全组合
 * @param {number[]} arr
 * @returns {number[]}
 */
function combinationFromNumber(arr) {
  let res = [];
  let s = [];
  for (let i = 0; i < arr.length; i++) {
    s = [];
    s.push(arr[i]);
    for (let j = 0; j < res.length; j++) {
      if (typeof res[j] === "object") {
        s.push(res[j].concat(arr[i]));
      } else {
        s.push([res[j], arr[i]]);
      }
    }
    res.push(...s);
  }
  return res;
}

// console.log(combinationFromNumber([1, 2, 3, 4]));

function numberArrayArange(arr) {
  let result = 0;
  let res = [];
  let s = [];
  for (let i = 0; i < arr.length; i++) {
    s = [];
    s.push(arr[i]);
    for (let j = i - 1; j < res.length; j++) {
      if (typeof res[j] === "object") {
        result += Math.abs(Math.max(...res[j]) - arr[i]);
        s.push(res[j].concat(arr[i]));
      } else {
        s.push([res[j], arr[i]]);
        result += Math.abs(res[j] - arr[i]);
      }
    }
    res.push(...s);
  }
  return result;
}

console.log(numberArrayArange([1, 2, 3]));

/**
 * 傻子解法
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] > max) {
        max = nums[j];
      }
      if (nums[j] < min) {
        min = nums[j];
      }
      result += Math.abs(max - min);
    }
  }

  return result;
};

console.log(subArrayRanges([1, 2, 3]));
console.log(subArrayRanges([1, 3, 3]));
console.log(subArrayRanges([4, -2, -3, 4, 1]));
