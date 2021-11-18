/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0;
  nums.forEach((item) => {
    if (pre + item < item) pre = item;
  });
  return pre;
};

// 傻子求法
// n^2 每个索引到结尾的连续和都求一遍，比如 1-n,2-n,3-n
// 测试输入
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
var maxSubArray = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = 0;
    for (let j = i; j < nums.length; j++) {
      temp = temp + nums[j];
      if (temp > result) {
        result = temp;
      }
    }
  }
  return result;
};

/**
 * 傻子优化求法
 * 郭标欢乐题
 * 傻子求法里面存在重复计算，前 n-1 个的和如果小于第 n 个，那么直接从第 n
 * 个开始计算
 * 测试输入
 * console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
 */
var maxSubArray = function (nums) {
  let result = nums[0];
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp = temp + nums[i];
    if(temp < nums[i]) {
      temp = nums[i];
    }
    if(temp > result) {
      result = temp;
    }
  }
  return result;
};

/**
 * 郭标正统解法，分治求解
 * 具体解法与傻子优化求法相同，不过这个比较‘正统’
 * 具体动态规划逻辑可以查看力扣里面的详细介绍
 */
 var maxSubArray = function(nums) {
  let pre = 0, maxAns = nums[0];
  nums.forEach((x) => {
      pre = Math.max(pre + x, x);
      maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};
maxSubArray([-1]);
