# leetcode_1094. 拼车

题目链接: [1094. 拼车](https://leetcode-cn.com/problems/car-pooling/)

假如你是一个哈啰单车顺风车司机，面对行进路上不断有行人上车，你必须考虑是否能够搭乘（伪题目）乘客

# 题目

假设你是一位顺风车司机，车上最初有 `capacity`  个空座位可以用来载客。由于道路的限制，车**只能**向一个方向行驶（也就是说，**不允许掉头或改变方向**，你可以将其想象为一个向量）。

这儿有一份乘客行程计划表 `trips[][]`，其中 `trips[i] = [num_passengers, start_location, end_location]`  包含了第 `i` 组乘客的行程信息：

- 必须接送的乘客数量；
- 乘客的上车地点；
- 以及乘客的下车地点。

这些给出的地点位置是从你的**初始**出发位置向前行驶到这些地点所需的距离（它们一定在你的行驶方向上）。

请你根据给出的行程计划表和车子的座位数，来判断你的车是否可以顺利完成接送所有乘客的任务（当且仅当你可以在所有给定的行程中接送所有乘客时，返回 `true`，否则请返回 `false`）。

## 示例 1

```
输入：trips = [[2,1,5],[3,3,7]], capacity = 4
输出：false
```

## 示例 2

```
输入：trips = [[2,1,5],[3,3,7]], capacity = 5
输出：true
```

## 示例 3

```
输入：trips = [[2,1,5],[3,5,7]], capacity = 3
输出：true
```

## 示例 4：

```
输入：trips = [[3,2,7],[3,7,9],[8,3,9]], capacity = 11
输出：true
```

## 提示

- 你可以假设乘客会自觉遵守 “**先下后上**” 的良好素质
- `trips.length <= 1000`
- `trips[i].length == 3`
- `1 <= trips[i][0] <= 100`
- `0 <= trips[i][1] < trips[i][2] <= 1000`
- `1 <= capacity <= 100000`

## 代码模板

```js
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {};
```

# 解法

这道题目的意思完全可以用下面这个图来解释，系好安全带，准备上车！

![IMG](../IMG/37.png)

所以机智的你可能已经猜到这道题要怎么下手了，我把每一个车站的人都算一遍，如果这个车站的人数超了，说明不能完成接送所有乘客的任务，那么怎么知道有多少个车站呢？请注意题目里面的一个提示

**这些给出的地点位置是从你的初始出发位置向前行驶到这些地点所需的距离（它们一定在你的行驶方向上）**

也就是说，我的车必然会经过 `trips` 里面**上车地点**最小的车站，**下车地点**最大的车站

![IMG](../IMG/38.png)

所以是不是要像下面这样子做呢？

```js
let min = Number.MAX_SAFE_INTEGER,
  max = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < trips.length; i++) {
  if (trips[i][1] < min) {
    min = trips[i][1];
  }
  if (trips[i][2] > max) {
    max = trips[i][1];
  }
}
return [min, max];
```

这样格局就小了，我内存战士从来不担心没内存和预设内存，睁大眼看了提示后发现

```
0 <= trips[i][1] < trips[i][2] <= 1000
```

这车站最多也多不过 `1000` 站，那我格局大一点，我预设 `2000` 个车站的数组，记录每一个站上我滴摩托上的人数

```js
// 默认每个车站没有人要接送
const station = new Array(2000).fill(0);
```

## 解法一

那么第一个暴力解法，万事通 `for` 循环就出来了

```js
var carPooling = function (trips, capacity) {
  const station = new Array(2000).fill(0);
  for (let i = 0; i < trips.length; i++) {
    const start = trips[i][1];
    const end = trips[i][2];
    for (let j = start; j < end; j++) {
      station[j] += trips[i][0];
    }
    if (station[i] > capacity) {
      return false;
    }
  }
  return true;
};
```

说实话我是万万没想到，这个时间复杂度为 `O(n*m)` 的算法竟然也过了，看来是道水题

![IMG](../IMG/39.png)
