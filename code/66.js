/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const children_1 = allChildStr(text1),
    children_2 = allChildStr(text2);
  const children_1_map = new Set(children_1);
  const recordArr = [];
  for (const i of children_2) {
    if (children_1_map.has(i)) {
      recordArr.push(i.length);
    }
  }
  return Math.max(...recordArr);
};
/**
 * 求字符串子序列全组合
 * @param {string} str
 * @return {string[]}
 */
 function allChildStr(str) {
  const arr = [];
  for(let i = 0; i < str.length; i++) {
    for(let j = i; j < str.length; j++) {
      arr.push(str.slice(i, j + 1))
    }
  }
  return arr;
}
longestCommonSubsequence("abcde", "ace");
