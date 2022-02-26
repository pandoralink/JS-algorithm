var minWindow = function (s, t) {
  const need = new Map();
  const windowCount = new Map();
  for (let i = 0; i < t.length; i++) {
    need.set(t[i], need.has(t[i]) ? need.get(t[i]) + 1 : 1);
  }
  let left = 0,
    right = 0;
  let valid = 0;
  let start = 0,
    len = Number.MAX_SAFE_INTEGER;
  while (right < s.length) {
    const c = s.charAt(right);
    right++;
    if (need.has(c)) {
      windowCount.set(c, windowCount.has(c) ? windowCount.get(c) + 1 : 1);
      if (windowCount.get(c) === need.get(c)) {
        valid++;
      }
    }
    while (valid === need.size) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      const c = s.charAt(left);
      left++;
      if (need.has(c)) {
        if (windowCount.get(c) === need.get(c)) {
          valid--;
        }
        windowCount.set(c, windowCount.get(c) - 1);
      }
    }
  }
  return len === Number.MAX_SAFE_INTEGER ? "" : s.slice(start, start + len);
};

// minWindow("ADOBECODEBANC", "ABC");
minWindow("aa", "aa");
