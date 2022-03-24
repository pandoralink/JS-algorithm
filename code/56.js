var longestPalindrome = function (s) {
  const isPalindrome = (s, left, right) => {
    while (left < right) {
      if (s.charAt(left) != s.charAt(right)) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  let begin = 0,
    length = 1;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        if (j - i + 1 > length) {
          begin = i;
          length = j - i + 1;
        }
      }
    }
  }
  return s.substring(begin, begin + length);
};

longestPalindrome("babad");
