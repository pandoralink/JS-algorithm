/**
 * 怎么尽想着那个四皇后呢？
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let result = 0;
  let last = 0;
  for (let i = 0; i < bank.length; i++) {
    let currentDeivceNum = [...bank[i].matchAll(/1{1,1}/g)].length;
    if(currentDeivceNum > 0) {
      result += last * currentDeivceNum;
      last = currentDeivceNum;
    }
  }
  return result;
};

numberOfBeams(["011001", "000000", "010100", "001000"]);
