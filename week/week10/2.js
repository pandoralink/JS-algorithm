/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "*") {
      stack.push(s[i]);
    } else {
      while (s[i] === "*") {
        stack.pop();
        i++;
      }
    }
  }
  return stack.join("");
};
removeStars("leet**cod*e");
