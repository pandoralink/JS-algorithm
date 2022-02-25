# leetcode_1109. 航班预订统计

题目链接: [1109. 航班预订统计](https://leetcode-cn.com/problems/corporate-flight-bookings/)

# 题目

这里有 `n` 个航班，它们分别从 `1` 到 `n` 进行编号。

有一份航班预订表 `bookings` ，表中第  `i`  条预订记录 `bookings[i] = [firsti, lasti, seatsi]`  意味着在从 `firsti`  到 `lasti` （包含 `firsti` 和 `lasti` ）的 每个航班 上预订了 `seatsi`  个座位。

请你返回一个长度为 `n` 的数组 `answer`，里面的元素是每个航班预定的座位总数。

## 示例

### 示例 1

```
输入：bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
输出：[10,55,45,25,25]
解释：
航班编号        1   2   3   4   5
预订记录 1 ：   10  10
预订记录 2 ：       20  20
预订记录 3 ：       25  25  25  25
总座位数：      10  55  45  25  25
因此，answer = [10,55,45,25,25]
```

### 示例 2

```
输入：bookings = [[1,2,10],[2,2,15]], n = 2
输出：[10,25]
解释：
航班编号        1   2
预订记录 1 ：   10  10
预订记录 2 ：       15
总座位数：      10  25
因此，answer = [10,25]
```

## 提示

- `1 <= n <= 2 * 104`
- `1 <= bookings.length <= 2 * 104`
- `bookings[i].length == 3`
- `1 <= firsti <= lasti <= n`
- `1 <= seatsi <= 104`

## 代码模板

```js
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {};
```

# 解法

像示例 `1` 里面其实已经说得非常清楚，就是 `booking` 数组，有多少个元素，就要对 `n` 个航班做多少次操作，假设这个航班在我们的函数里面定义为数组，以下皆由**航班数组**代称，这个航班数组一开始初值为 `0` ，比如 `n = 5`，航班数组等于 `[0,0,0,0,0]`

那其实这是一个**暴力法**很容易写出答案的情况，代码如下

```js
var corpFlightBookings = function (bookings, n) {
  const res = new Array(n).fill(0);
  for (let i = 0; i < bookings.length; i++) {
    const start = bookings[i][0] - 1;
    const end = bookings[i][1];
    for (let j = start; j < end; j++) {
      res[j] += bookings[i][2];
    }
  }
  return res;
};
```

它的思路就是，`bookings` 的每个元素都去遍历一次 `res` 数组，即航班数组，每次遍历只需依靠 `bookings` 给出开始索引和结束索引，这个**暴力法**的时间复杂度是 `O(n^2)`，因为是两个 `for` 循环，一般来说这么好解决的 `leetcode` 中等题，一般都会遇到超时错误，不过这题 `leetcode` 好像没有为难我们，可能是否遇到超时需要看你提交时的语言和网速？

![IMG](../IMG/21.png)

不过作为一个有追求的程序员，优化一下那是必然（我肯定不会告诉你我看过题解拉）

![IMG](../IMG/22.jpg)

## 差分数组

这个差分数组指的是，将原数组转换成 `newNum[i] = newNum[i] - newNum[i-1]`，改变如下

```js
const num = [1, 2, 3, 4];
const diff = new Array(num.length).fill(0);

// 注意：diff[0] 是和 num 相同的
diff[0] = num[0];

for (let i = 1; i < num.length; i++) {
  diff[i] = num[i] - num[i - 1];
}
console.log(num); // [1, 2, 3, 4]
console.log(diff); // [1,-1,-1,-1]
```

`diff[0]` 和 `num[0]` 相同的原因不仅仅是因为上面那个公式需要 `i >= 1`，还因为我们需要通过 `diff` 还原出 `num`

```js
// diff = [1,-1,-1,-1]
const num = new Array(diff.length).fill(0);
// 因为两者本来就相等，所以还原时需要 `还` 回去
num[0] = diff[0];

for (let i = 1; i < num.length; i++) {
  num[i] = num[i] + diff[i];
  // 因为 diff[i] === num[i] - num[i - 1], 所以上式等于
  // num[i] = num[i - 1] + num[i] - num[i - 1] = num[i]
}
console.log(diff); // [1,-1,-1,-1]
console.log(num); // [1, 2, 3, 4]
```

可是就是这个转来转去的玩意儿，它能怎么优化我们的这个航班操作呢？

上面**暴力法**之所以开销如此之大，是因为算法对于 `bookings` 其中的每一个元素都会去遍历一次**航班数组**，如果我们能够有一种方法把这种需要多次加同样的值，去变成一次性操作，时间复杂度是不是就能降到 `O(1)` 呢？

那我们的这个**差分数组**能完成这个骚操作吗？

```
原数组   [1,2,3,4,5]
差分数组 [1,-1,-1,-1,-1]

将数组索引 1 -> 3 的元素加 3

给差分数组对应索引的元素加 3

那么重新将差分数组还原成原数组将会是怎样？
```

重新将上面的还原算法进行一个解构

```js
// 原数组 num = [1,2,3,4,5]
// 差分数组 diff = [1,2,-1,-1,-1]
const res = new Array(diff.length).fill(0);
res[0] = diff[0];

// 此时 diff[1] = num[1] - num[0] + 3
// 而 diff[i] = num[i] - num[i-1]
for (let i = 1; i < num.length; i++) {
  res[i] = res[i - 1] + diff[i - 1];
  // 当执行到 i = 1 时
  // res[1] = diff[0] + diff[1] = num[0] + num[1] - num[0] + 3 = num[1] + 3
  // 当执行到 i = 2 时
  // res[2] = res[1] + diff[2] = num[1] + 3 + num[2] - num[1] = num[2] + 3
  // 还没看出来？继续道 i = 3
  // res[3] = res[2] + diff[3] = num[2] + 3 + num[3] - num[2] = num[3] + 3
}
console.log(diff); // [1,-1,-1,-1]
console.log(num); // [1, 2, 3, 4]
```

有没有看出**差分数组**的奇妙之处，只是因为某一个元素加了 `n`，这个 `n` 就能够在还原时，层层递进，不断的沿着循环往上加，当我们给 `diff[i] + 3` 等同于 `(num[i]...num[num.length - 1]) + 3`

同时也因为这个 `3` 是层层递进的，会超过我们预期给定的区间，因此我们需要在区间尾部对 `diff[end] - 3` 以此来抵消 `3` 的传递

也就是说差分数组成功的将 `for` 循环变成了**两次赋值**，从 `O(n)` 变成了 `O(1)`

```js
for (let j = start; j < end; j++) {
  res[j] += booking[i][2];
}
// 等同于
diff[start] += booking[i][2];
if (booking[1] < n) {
  nums[booking[1]] -= booking[2];
}
```

综上，这道题最后的题解为

```js
var corpFlightBookings = function (bookings, n) {
  // 航班数组初始全部 0，因此差分数组 diff 也全部为 0
  const nums = new Array(n).fill(0);
  for (const booking of bookings) {
    nums[booking[0] - 1] += booking[2];
    if (booking[1] < n) {
      nums[booking[1]] -= booking[2];
    }
  }
  // 还原数组
  for (let i = 1; i < n; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};
```
