/**
 * 求字符串子序列全组合
 * @param {string} str
 * @return {string[]}
 */
function _allChildStred(str, m, result) {
  if (m === str.length) {
    console.log(result.join(""));
  }
  result.push(str[m]);
  _allChildStred(str, m + 1, result);
  result.pop(str[m]);
  _allChildStred(str, m, result);
}

function allChildStr(str) {
  if (str === "") {
    return [];
  }
  for (let i = 0; i < str.length; i++) {
    _allChildStred(str, i, []);
  }
}
allChildStr("abcde");
