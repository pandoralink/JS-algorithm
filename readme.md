debug.html 提供调试器功能

在练题的过程尽可能多的适用 JS API，以达到熟练适用 JS API 的目的，并不是说时间复杂度最优的算法就是最优，在实际的编写中能够最快达到运行目的并且能够保证接近理论最优复杂度的的代码才是实际的，能够达到最优复杂度的代码需要时间去理解，而适用 API 可以让代码更少且更让人理解，在实际编写中也更有可能应用

# 关于题目难度和公司

大厂的题目中等难度考察的会多一些，像字节跳动前端的中等题出现频率要比简单题多，建议先做几道简单题后再做一道中等题的，用此频率去做题

# 关于文档

可以把遇到的边缘情况写出来，这样在回想或者重写遇见过的题目时能够快速上手

**提示**

[88. 合并两个有序数组](./code1.js)

贪心，两个递增序数组，从后往前遍历，每次都取最大值填充，边缘值 -1 指两个数组之一已经遍历完（填充完），只需填充另一个数组

[53. 最大子序和](./code2.js)

动态规划，需要设立求解公式，此题时每次都和上一次比较并得出最大值

[112. 路径总和](./code15.js)

[415. 字符串相加](./code4.js)

从尾部相加，进位加 1，可以先把字符串反转，不过开销太大，官方的解法更好，更优雅

<-----------------分割线--------------------->

1. 利用栈实现反转（JS Array）
2. 迭代反转，每次结束都把当前指向节点指向 next，注意 curr 和 next 在结束时是同一指向，而 prev 的指向节点会与 curr 断开

[206. 反转链表](./code5.js)

用栈后进先出的思想和 Ascii 码去求解，当遇到相对应的‘括号’就出栈，什么时候相对应，就是 Ascii 码加 1 || 2 的时候就是相对应的，可以去看一下 [Ascii 码表](https://baike.baidu.com/item/ASCII/309296?fr=aladdin#3)

这里多说一点 code6.js 的一些解释

**一个变量声明就能得到击败 40% 的人的提升？**

![IMG](./IMG/img1.png)

```js
// one
let stackTop = stack[stack.length - 1];
if (stackTop + 1 === s.charCodeAt(i) || stackTop + 2 === s.charCodeAt(i)) {
}
// two
if (
  stack[stack.length - 1] + 1 === s.charCodeAt(i) ||
  stack[stack.length - 1] + 2 === s.charCodeAt(i)
) {
}
```

one 的写法和 two 的写法区别在哪？one 的写法多了声明，two 的写法多了 2 次计算（假设 stack.length - 1 和 stack 取值算 2 次）

但 one 的写法要比 two 快 12 ms，这是因为在 JS 中声明一个变量的开销很小，相对于为了减少空间复杂度而重复计算的方案更优

[20. 有效的括号](./code6.js)

滑动窗口真的妙呀

[3. 无重复字符的最长子串](./code7.js)

复习组合公式了属于是，官方文档里面从第 5-6 题是不太能看的懂的，矩阵已经很久没有学过了

[70. 爬楼梯](./code8.js)

程序 = 算法 + 数据结构

[141. 环形链表](./code9.js)

<-----------------分割线--------------------->

[155. 最小栈](./code11.js)

1. 使用在栈上添加一个最小值，然后每次 push 和 pop 时维护这个最小值
2. 使用辅助栈，每次 push 都会维护辅助栈相对应的最小值

附加属性-特殊值介绍

1. min 的初值不能设置为 0，压栈元素可能是 0 或者比 0 更小的元素
2. 由于每次弹栈都会维护一次 min，要注意此时栈是否为空，栈为空时 min 应该为 0

[121. 买卖股票的最佳时机](./code12.js)

**突然发现 添加方法注释（类似于 java doc）也可以起到类似 TS 的效果**

```js
// 比如
/**
 * 写代码的过程中 vs code 会认为 prices 是 number[]
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {};
```

[94. 二叉树的中序遍历](./code13.js)

[226. 翻转二叉树](./code14.js)

[5952. 环和杆](./week/code3.js)

1. 傻子解法，Map 保存所有的可能数组索引，然后对每个遇到的索引进行字符串累加，最后循环遍历判断是否包含 RGB

```
B0R0 -> 0 : BR
```

2. 位运算之把我秀麻了，虽然很多课都学过二进制，但没想到代码中也可以使用，解题思路位运算，设 RGB 为三位二进制，如果有 RGB 中三个字母中任意个出现就进行或运算，如 R = 001, G = 010, B = 100，设初值为 0，遍历完后，值为 7 说明包含 RGB

```
000 | 001 = 001
001 | 100 = 101
```

_进入中等题了哦兄弟们_

# 3. 无重复字符的最长子串

这题好像做过，先避开先

[129. 求根节点到叶节点数字之和](./code16.js)

[165. 比较版本号](./code17.js)

[889. 根据前序和后序遍历构造二叉树](./code18.js)

[652. 寻找重复的子树](./code19.js)

[230. 二叉搜索树中第 K 小的元素](./code20.js)

[98. 验证二叉搜索树](./code21.js)

二叉搜索树存在两个框架，一是运用二叉搜索树本身中序遍历，得到递增遍历结果的框架，二是根据 root.val 的结果去选择遍历右子树还是左子树

```js
// 一

traverse(TreeNode root) {
  if (root == null) return;
  traverse(root.left);
  // 中序遍历代码位置
  traverse(root.right);
}

// 二

BST(TreeNode root, int target) {
  if (root.val == target)
    // 找到目标，做点什么
  if (root.val < target)
    BST(root.right, target);
  if (root.val > target)
    BST(root.left, target);
}

```

[96. 不同的二叉搜索树](./code22.js)

# 写在最后

像一般的人总是说刷够 leetcode 多少题就能够进大厂，我觉得用 labuladong 的一句话可以完美复述

_很多「大佬」，你问他怎么入门算法，他告诉你看《算法导论》，然后又甩给你一堆英文课程，还强调一定要看英文的哦，中文的翻译不好。_

**实际上他根本不在乎你的诉求，他只是想告诉你：我做过这些，我吃过这些苦，我牛逼吧，我厉害吧，你羡慕吧，你做不到吧~**

对于刚开始的人来说根本没有帮助，同样盲目的刷题

但是通过 labuladong 的算法小抄来刷题就不一样了，我刚开始刷题时，一条题就需要一个小时去做 + 理解，我一天的学习时间最多也就在 6-8 个小时之间，完全没有其他事，不上课不玩游戏不看抖音的情况下，那你想，按传统的方式我一天最多只能刷 6-8 题，我全部精力都扑在算法上面也就只能一个月刷到 180-240 题左右，而且刷了题你还得复习理解看看有没有掌握吧，起码三分之一的时间消耗了，你刷题不能只是刷 leetcode 上面的数字，你的真正掌握了才算是刷题啊，那一个月也就只能刷 120-180 题左右，那如果考虑它的变体呢？那就又不行了，刷题时间遥遥无期。

所以还是乖乖按照 labuladong 的文章去刷题吧

# leetcode 的 BUG

leetcode 存在 bug，最后一次提交记录，在前端会直接使用`当前时间`，`当前时间`是什么意思？当你提交一次后，切换导航栏，比如 `题目描述` -> `提交记录`，最新一次的提交结果的提交时间会随着本地时间不断变化，但刷新后就不会出现这种情况，后端应该是已经拿到了时间戳并记录在了数据库。
