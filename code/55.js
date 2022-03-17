var removeDuplicateLetters = function (s) {
  const charSet = new Array(256).fill(false);
  const charCount = new Array(256).fill(0);
  for (const char of s) {
    charCount[char.charCodeAt()]++;
  }
  const resStack = [];
  for (const char of s) {
    charCount[char.charCodeAt()]--;
    if (!charSet[char]) {
      while (resStack.length > 0 && char < resStack[resStack.length - 1]) {
        if (charCount[resStack[resStack.length - 1].charCodeAt()] === 0) {
          break;
        }
        charSet[resStack.pop()] = false;
      }
      charSet[char] = true;
      resStack.push(char);
    }
  }
  return resStack.join("");
};

removeDuplicateLetters("cbacdcbc");
