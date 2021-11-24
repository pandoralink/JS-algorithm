/**
 * 这条题应该与动态规划或者分治算法有关什么的
 * 可以使用栈
 * 但还是先使用暴力破解法
 * 算了，暴力破解法比栈的还要难想，直接用栈
 * 但存在缺点，就是混合的字符串无法判断
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  // 虽然 JS 数组越界不会报错，但还是要尽量避免
  stack.push(s.charCodeAt(0));
  for (let i = 1; i < s.length; i++) {
    let stackTop = stack[stack.length - 1];
    if (stackTop + 1 === s.charCodeAt(i) || stackTop + 2 === s.charCodeAt(i)) {
      stack.pop();
    } else {
      stack.push(s.charCodeAt(i));
    }
  }
  return stack.length === 0;
};

/**
 * 官方 JS 解
 * 也不能解决混合字符串
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const pairs = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stk = [];
  for (let ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stk.pop();
    } else {
      stk.push(ch);
    }
  }
  return !stk.length;
};

isValid("()");
isValid("(s)");
