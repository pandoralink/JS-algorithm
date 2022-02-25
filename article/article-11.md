# leetcode_48. 旋转图像

题目链接: [48. 旋转图像](https://leetcode-cn.com/problems/rotate-image/)

# 题目

给定一个 _n × n_ 的二维矩阵 `matrix` 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在**原地**旋转图像，这意味着你需要直接修改输入的二维矩阵。**请不要**使用另一个矩阵来旋转图像。

## 示例 1

![IMG](https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg)

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
```

## 示例 2

![IMG](https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg)

```
输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```

## 提示

- `n == matrix.length == matrix[i].length`
- `1 <= n <= 20`
- `-1000 <= matrix[i][j] <= 1000`

## 代码模板

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {};
```

# 解法

看完题目后，你可能已经发现了这道题加重了三个字**请不要**

![IMG](../img/23.jpg)

**请不要**使用另一个矩阵来旋转图像，不用矩阵？那我用二维数组不就行了？这就有点跑题了，这道题的二维矩阵在代码中的实现就是二维数组，所以它的言外之意就是不要使用额外的空间，需要你在原地修改这个二维数组，那如果用额外空间呢？那可操作性就多了

```js
// 随便写了一个
var rotate = function (matrix) {
  const n = matrix.length; // 因为 n x n 矩阵
  const temp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      temp[j][n - i - 1] = matrix[i][j];
    }
  }
  return temp;
  // if [[1,2,3],[4,5,6],[7,8,9]]
  // will [[7,4,1],[8,5,2],[9,6,3]]
};
```

用这种肯定是不行的，因为 `leetcode` 上这道题是 `void` 没有返回值，它测试的时候是直接看你有没有修改传递进函数中参数的值（其实也有办法，就是重新遍历 `matrix` 并赋值），所以这道题难点就在**原地 TP**，那怎么做到呢？

额外辅助空间做不到不要紧，我们可以通过其中看到矩阵旋转 `90°` 的原理，原理如下

![IMG](../img/24.jpg)

如果原地操作，那么 `[1,2,3]` 移过去的时候又怎么能 `[3,6,9]` 的位置呢？

学过线性代数的家人们可能就知道了（我学过也没想出来），**矩阵转置**，就可以做到行列交换，这里帮大家复习一下线性代数，转置矩阵怎么求

```
[1,2,3]   [1,0,0]   [1,4,7]
[4,5,6] x [0,1,0] = [2,5,8]
[7,8,9]   [0,0,1]   [3,6,9]
```

原矩阵 x 大小为 n 的单位矩阵，其实就是一个对角线反转，能够帮助我们原地进行一个**行列翻转**，这个时候在来一次镜像操作就可以解决这道题目

```
[1,4,7]    [7,4,1]
[2,5,8] -> [8,5,2]
[3,6,9]    [9,6,3]
```

因此这道题的解法就是

```js
var rotate = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for(let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};
// leetcode 的解法只需反转一半，但这个已经足够了
```

# 总结

没想到 `leetcode` 还能看到关于线性代数的一部分内容，可惜当初的知识已经随时间流去了
