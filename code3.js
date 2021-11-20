/**
 * 第一个解法还是经典的傻子求法
 * 时间复杂度为 n + n-1 +...+ 1 = (n+n^2)/2 = n^2
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let index1;
  let index2;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 * 对傻子求解算法进行小小的优化
 * 可以先排序 nlogn，然后二分查找 n/2
 * 时间复杂度为 nlogn
 * 贪心？不像，分治？不像，动态规划？不像
 * 空间复杂度 O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let min = 0;
  let max = nums.length - 1;
  let resultNum = [];
  let resultIndex = [];
  let temp = Array.from(nums).sort((a, b) => a - b);

  /**
   * temp[min] + temp[max] < target; min += 1
   * temp[min] + temp[max] > target; max -= 1
   * temp[min] + temp[max] = target; return [min,max];
   */
  for (let i = 0; i < temp.length; i++) {
    if (temp[min] + temp[max] < target) {
      min += 1;
    } else if (temp[min] + temp[max] > target) {
      max -= 1;
    } else if (temp[min] + temp[max] === target) {
      resultNum = [temp[min], temp[max]];
    }
  }
  nums.forEach((item, index) => {
    if (item === resultNum[0] || item === resultNum[1]) {
      resultIndex.push(index);
    }
  });

  return resultIndex;
};

/**
 * 力扣正统解法
 * 这道题没有使用到任何特殊算法
 * 使用哈希表，力扣官方题解中没有 JS 解法
 * 前端什么时候才能站起来！
 * desc: HashMap 的寻找消耗是 O(1)，你用 for循环
 * 的话就是 O(n) 和第一种傻子求法没什么区别，不知道
 * HashMap 为什么能做到这种效率
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // <value,index>: 值是键，下标是索引
  let numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(target - nums[i])) {
      return [numsMap.get(target - nums[i]), i];
    }
    numsMap.set(nums[i], i);
  }
};

twoSum([2, 7, 11, 15], 9);
