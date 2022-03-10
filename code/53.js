/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {
  this.size = n - blacklist.length;
  this.map = {};
  for (const b of blacklist) {
    // 存储黑名单，建立映射正确白名单
    this.map[b] = 1;
  }
  let last = n - 1;
  for (const b of blacklist) {
    if (b >= this.size) {
      continue;
    }
    while (this.map[last]) {
      last--;
    }
    this.map[b] = last;
    last--;
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  const { size, map } = this;
  const index = Math.floor(Math.random() * size);
  if (map[index]) {
    return map[index];
  }
  return index;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */

var obj = new Solution(7, [2, 3, 5]);
var param_1 = obj.pick();
