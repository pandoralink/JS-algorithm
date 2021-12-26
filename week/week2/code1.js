/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let index = 0; index < words.length; index++) {
    if(words[index].length === 1) {
      return words[index];
    }
    let arr = words[index].split("");
    const length = arr.length;
    for (let i = 0; i < length; i++) {
      if (arr.shift() !== arr.pop()) {
        break;
      } else if (arr.length <= 1) {
        return words[index];
      }
    }
  }
  return "";
};

firstPalindrome(["pp","e"]);
