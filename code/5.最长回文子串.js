/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  const dp = new Array(s.length).fill(false).map(() => new Array(s.length).fill(false));
  let maxLeft = 0, maxLen = 1;
  dp.forEach((value, index) => value[index] = true);
  for(let r = 0; r < s.length; r++) {
      for(let l = 0; l < r; l++) {
          if(s[l] === s[r]) {
              if(r - l < 3) {
                  dp[l][r] = true;
              } else {
                  dp[l][r] = dp[l + 1][r - 1];
              }
              if(r - l + 1 > maxLen) {
                  maxLen = r - l + 1;
                  maxLeft = l;
              }
          } else {
              dp[l][r] = false;
          }
      }
  }
  return s.substring(maxLeft, maxLeft + maxLen);
};
longestPalindrome("aacabdkacaa");