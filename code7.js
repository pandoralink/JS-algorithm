/**
 * 傻子解法
 * 求出所有的排列数
 * 三重循环（算是吧？）遍历每一个可能子串并与当前最长长度比较
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let temp = [];
    for (let j = i; j < s.length; j++) {
      let char = s.charAt(j);
      let result = temp.some((item) => {
        return item === char;
      });
      if (result) {
        break;
      } else {
        temp.push(char);
        if (temp.length > max) {
          max = temp.length;
        }
      }
    }
  }
  return max;
};

/**
 * 只想出了傻子解法就去看答案了
 * 真 TM 成傻子了
 * @param {*} s
 * @returns
 */
var lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1,
    ans = 0;
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};

lengthOfLongestSubstring("abcabcbb");
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
