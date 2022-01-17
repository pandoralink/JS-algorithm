# JS 离谱到给离谱它妈开门之二维数组创建

今天做一道 leetcode 题，想着需要创建一个二维数组，赋值初始化为 0，用 C、C++ 和 Java 的家人们可能疑惑了，这有什么？不就一行代码的事？

![就这？](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.gif8.com%2Fdoutu%2Fimages%2Fbq20200309%2F20200225620558_ERgWhQ.jpg&refer=http%3A%2F%2Fimg.gif8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645026015&t=8241cdbffaf08b15ca5aa70f59bd581f)

```java
int[][] arr = new int[n][n];
```

用 js 创建的我想着搞个花活？我得用一些奇奇怪怪的 API，不然用两个 for 循环不显得我太菜了？于是下面这篇代码出现了

```js
let memory = new Array(n + 1).fill(0);
let temp = memory.concat();
memory.fill(temp);
```

concat() 返回的是新数组没问题吧，我填充的可是拷贝的数组，不是自己套自己喔

![又是一个小细节](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13966720318%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645026425&t=061b5009f42618b30714d6974be20b3d)

后面我就没在管这个二维数组了，去刷 leetcode 了，我刷的那条题也是牛逼，我写完代码逻辑后，我觉得没问题呀，我就把示例填了进去，结果过了，我信心倍增

![就这](https://img1.baidu.com/it/u=3831093513,2026284634&fm=253&fmt=auto&app=138&f=JPEG?w=440&h=356)

然后我去提交，结果发现第三个就测试用例就错了？？？

![什么鬼？](https://img0.baidu.com/it/u=3344084148,1346735844&fm=253&fmt=auto&app=138&f=JPEG?w=392&h=280)

woc，不可能！我那么精妙绝伦的解法怎么可能会出错？？于是我反反复复的看我的解法好几遍，全然没有去看我创建的`二维数组`，最后无奈我把代码从网页上拉下来，准备本地调试，一开始调试的时候我都还没有注意到`二维数组`的问题，后面想看看`二维数组`的复制情况，好家伙，可算被我发现了，代码如下

```js
// 查看复制情况
memory[start][end] = res;
```

好家伙，竟然是，一整列都赋值了？？

![IMG](./../IMG/img2.png)

![我大意了](https://img0.baidu.com/it/u=2280107455,3900410866&fm=253&fmt=auto&app=120&f=JPEG?w=271&h=264)

后来我再仔细一想，js 数组它存的是地址喔，你 fill 不就是把地址给存进去了吗？我上面的代码的赋值其实都是给 fill() 参数中对应的那个数组的赋值

# 总结

其实这个问题主要还是我太菜了，没有注意到这个问题，不能怪 JS，C++，java 人家也是存的地址，同样的代码，也是同样的结果，只能说是自己没有严格的规范编写代码，忽略了本质

PS：其实上面那个已经是 v2 版本了，有个 v1 版本更是让我震惊

```js
let memory = new Array(n).fill(0);
memory.fill(memory);
```
