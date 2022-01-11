/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const vArray1 = version1.split(".");
  const vArray2 = version2.split(".");
  const minLength = Math.min(vArray1.length, vArray2.length);
  const maxLength = Math.max(vArray1.length, vArray2.length);
  for (let i = 0; i < minLength; i++) {
    if (parseInt(vArray1[i]) - parseInt(vArray2[i]) < 0) {
      return -1;
    } else if (parseInt(vArray1[i]) - parseInt(vArray2[i]) > 0) {
      return 1;
    }
  }
  if (vArray1.length === vArray2.length) {
    return 0;
  } else if (vArray1.length < vArray2.length) {
    for (let i = minLength; i < maxLength; i++) {
      if (parseInt(vArray2[i]) !== 0) {
        return -1;
      }
    }
    return 0;
  } else {
    for (let i = minLength; i < maxLength; i++) {
      if (parseInt(vArray1[i]) !== 0) {
        return 1;
      }
    }
    return 0;
  }
};

/**
 * 失败
 * version1: "19.8.3.17.5.01.0.0.4.0.0.0.0.0.0.0.0.0.0.0.0.0.00.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000"
 * version2: "19.8.3.17.5.01.0.0.4.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0000.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000"
 */

/**
 * 还得是官方解啊，每一步都是那么巧妙
 * 同样的时间复杂度，官方写得就那么简洁
 * @param {string} version1
 * @param {string} version2
 * @returns
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");
  // 这里说一下 ++i 和 i++ 的区别
  // ++i <=> i = i + 1;
  // i++ <=> () => let tmp = i; i = i + 1; return tmp;
  // 都能使得 i + 1, 但是 i++ 需要消耗一个临时变量
  for (let i = 0; i < v1.length || i < v2.length; ++i) {
    // 设置默认值，避免超过 v1 or v2 后获取的值为 undefined
    let x = 0,
      y = 0;
    // 避免越界
    if (i < v1.length) {
      x = parseInt(v1[i]);
    }
    if (i < v2.length) {
      y = parseInt(v2[i]);
    }
    if (x > y) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
  }
  return 0;
};

/**
 * 双指针写法
 * @param {string} version1
 * @param {string} version2
 * @returns
 */
var compareVersion = function(version1, version2) {
  const n = version1.length, m = version2.length;
  let i = 0, j = 0;
  while (i < n || j < m) {
      let x = 0;
      // x * 10 是字符串需要转换成 10 进制
      // 比如 "001" => 1, "101" => 101
      for (; i < n && version1[i] !== '.'; ++i) {
          x = x * 10 + version1[i].charCodeAt() - '0'.charCodeAt();
      }
      ++i; // 跳过点号
      let y = 0;
      for (; j < m && version2.charAt(j) !== '.'; ++j) {
          y = y * 10 + version2[j].charCodeAt() - '0'.charCodeAt();
      }
      ++j; // 跳过点号
      if (x !== y) {
          return x > y ? 1 : -1;
      }
  }
  return 0;
};
