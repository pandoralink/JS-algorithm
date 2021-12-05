/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  return perm(digits);
};

findEvenNumbers([2, 1, 3, 0]);

function seek(index, n) {
  var flag = false,
    m = n;
  do {
    index[n]++;
    if (index[n] == index.length) index[n--] = -1;
    else if (
      !(function () {
        for (var i = 0; i < n; i++) if (index[i] == index[n]) return true;
        return false;
      })()
    )
      if (m == n) flag = true;
      else n++;
  } while (!flag && n >= 0);
  return flag;
}
function perm(arr) {
  let result = [];
  var index = new Array(arr.length);
  for (var i = 0; i < index.length; i++) index[i] = -1;
  for (i = 0; i < index.length - 1; i++) seek(index, i);
  while (seek(index, index.length - 1)) {
    var temp = [];
    for (i = 0; i < index.length; i++) temp.push(arr[index[i]]);
    result.push(parseInt(temp.toString()));
  }
  return result;
}
