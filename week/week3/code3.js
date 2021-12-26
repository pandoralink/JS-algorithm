/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  let stack = [s.charAt(0)];
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) - stack[stack.length] === 1) {
      stack.pop();
    } else if (locked.charAt(i-1) === 0) {
      stack.pop();
    }
  }
  return stack.length === 0;
};

canBeValid("))()))", "010100");
