/**
 * 慌乱之中写出的解法
 * @param {string} s
 * @return {boolean}
 */
 var checkString = function(s) {
  for(let i = 1; i < s.length; i++) {
    if(s.charCodeAt(i) - s.charCodeAt(i-1) < 0) return false;
  }
  return true;
};

/**
 * 其实还可以这样做
 * 检测是否包含 ba 字符串
 * @param {string} s
 * @return {boolean}
 */
 var checkString = function(s) {
  return !s.includes("ba");
};