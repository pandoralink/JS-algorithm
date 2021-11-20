/**
 * parseInt 实际上也解决不了这个问题
 * 会出错
 * 注意 JS 超过一定数值后出现精度丢失，什么是
 * 精度丢失，就是加起来结果和答案不一样，比如
 * 1 + 1 = 3，当数值很大的时候这种情况是会出现的
 * 这个是偷鸡方法，使用 JS 的 BigInt
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  return (BigInt(num1) + BigInt(num2)).toString();
};

/**
 * 傻瓜算法
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length,
    j = num2.length,
    k = Math.max(i, j);
  let arr = new Array(k + 1);
  let flag = 0;
  i = i - 1;
  j = j - 1;
  while (k > 0) {
    if (i < 0) {
      arr[k] = (parseInt(num2[j]) + flag) % 10;
      flag = parseInt((parseInt(num2[j]) + flag) / 10);
    } else if (j < 0) {
      arr[k] = (parseInt(num1[i]) + flag) % 10;
      flag = parseInt((parseInt(num1[i]) + flag) / 10);
    } else {
      let temp = parseInt(num1[i]) + parseInt(num2[j]);
      if (temp >= 10) {
        temp = temp % 10;
        arr[k] = temp + flag;
        flag = 1;
      } else {
        let currentNum = temp + flag;
        if (currentNum === 10) {
          arr[k] = 0;
          flag = 1;
        } else {
          arr[k] = temp + flag;
          flag = 0;
        }
      }
    }
    i--;
    j--;
    k--;
  }
  // k = 0 时会判断最后一位是否进位
  if (flag === 1) {
    arr[k] = flag;
  } else {
    arr.shift();
  }

  return arr.toString().replaceAll(",", "");
};

/**
 * 这个是 leetcode 正统方案
 * 思路一样但官方解法却那么优雅
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    add = 0;
  const ans = [];
  while (i >= 0 || j >= 0 || add != 0) {
    // 利用 ascii 码而不是 parseInt
    // 而傻瓜解法差在先转换为 Int 在 转换成 Char
    const x = i >= 0 ? num1.charAt(i) - "0" : 0;
    const y = j >= 0 ? num2.charAt(j) - "0" : 0;
    const result = x + y + add;
    ans.push(result % 10);
    add = Math.floor(result / 10);
    i -= 1;
    j -= 1;
  }
  return ans.reverse().join("");
};

console.log(addStrings("9333852702227987", "85731737104263"));
console.log(addStrings("456", "77"));
console.log(addStrings("584", "18"));
console.log(addStrings("6994", "36"));
console.log(addStrings("9133", "0"));
