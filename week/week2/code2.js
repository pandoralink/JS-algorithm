/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  let str = "";
  let set = new Set(spaces);
  for (let i = 0; i < s.length; i++) {
    if (set.has(i)) {
      str += " ";
    }
    str += s[i];
  }
  return str;
};
