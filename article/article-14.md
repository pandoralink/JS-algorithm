# leetcode_560. 和为 K 的子数组

题目链接: [560. 和为 K 的子数组](https://leetcode-cn.com/problems/subarray-sum-equals-k/)

# 题目

给你一个整数数组 nums 和一个整数  k ，请你统计并返回该数组中和为  k  的连续子数组的个数。

## 示例 1

```
输入：nums = [1,1,1], k = 2
输出：2
```

## 示例 2

```
输入：nums = [1,2,3], k = 3
输出：2
```

## 提示

- `1 <= nums.length <= 2 * 10^4`
- `-1000 <= nums[i] <= 1000`
- `-10^7 <= k <= 10^7`

## 代码模板

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {};
```

# 解法

又是这种只有寥寥几句的题目，这种题往往都是暗藏玄机，但像数组题目，没有什么是我 `for` 循环不敢碰一碰的，暴力穷举是提升做题幸福感的小技巧

![IMG](../IMG/t_1.jpg)

暴力法的求解如下

```js
var subarraySum = function (nums, k) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; i++) {
      sum += nums[j];
      if (sum === k) {
        res++;
      }
    }
  }
  return res;
};
```

其过程如下

![IMG](../IMG/34.jpg)

这种连续子数组的问题，就是求全组合的问题，求出来的过程中附加解决子数组和的问题，但时间复杂度太高了，是 `O(n^2)` 在中等题几乎没有容身之处，所以优化是必然的

_补充：说实话 `leetcode` 的枚举（也就是暴力求解）多少有点反人类，它是倒着来的（估计是一开始就想到其他解法，然后再去做的暴力解法）_

这个优化的方案是**前缀和**，先别喷，实际上但把前缀和用解决这道题是没有多少用处的，因为连续子数组意味着我们要知道全组合，而全组合本身已经是一个 `O(n)` 的算法并且遍历过程中是可以计算 `[j, i]` 这种区间连续子数组之值，硬伤**前缀和**可能就是这样

```js
var subarraySum = function (nums, k) {
  const preSum = new Array(nums.length + 1).fill(0);
  for (let i = 1; i < preSum.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1];
  }
  const sumRange = (left, right) => {
    return preSum[right + 1] - preSum[left];
  };
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      // 前缀和的意义在哪里呢？
      if (sum === sumRange(i, j)) {
        res++;
      }
    }
  }
  return res;
};
```

求**前缀和**数组部分的代码出自我另一篇文章，有兴趣的可以去看一下，[leetcode_303. 区域和检索 - 数组不可变](https://juejin.cn/post/7066809892728176671)

但是**前缀和**与**哈希表**搭配起来就能够优化这道题目

单用**前缀和**加连续子数组，没有办法充分利用**前缀和**中间结果的特性，求了太多不需要的连续子数组值，而我们需要的其实是下面的这些

```
nums[j...i] = k
preSum[i+1] - preSum[j] = k

preSum[i+1] = preSum[j] + k
preSum[j] = preSum[i+1] - k
```

如果使用一个高效的数据结构来存放之前的 `preSum`，当我们遍历到 `i` 就可以根据当前的 `preSum[i+1]` 的值去反推另一半符合条件的 `preSum[j]`，而不是去一个个的遍历，在 `preSum` 生成的过程中去存放中间结果（指前缀和），这样就可以在生成 `preSum` 的过程中把子数组和为 `k` 的数组给找到了，其过程如下

![IMG](../IMG/36.jpg)

## 题解

因此这道题的解法如下

```js
var subarraySum = function (nums, k) {
  const mp = new Map();
  mp.set(0, 1);
  let count = 0,
    pre = 0;
  for (const x of nums) {
    pre += x;
    if (mp.has(pre - k)) {
      count += mp.get(pre - k);
    }
    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1);
    } else {
      mp.set(pre, 1);
    }
  }
  return count;
};
```
