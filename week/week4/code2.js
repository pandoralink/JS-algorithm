function Trial(i, n) {
  // 进入本函数时，在n×n棋盘前i-1行已放置了互不攻击的i-1个棋子
  // 现从第i行起继续为后续棋子选择合适位置
  // 当i>n时，求得一个合法的布局，输出之
  // if (i>n) 输出棋盘的当前布局； //n为4时，即4皇后问题
  // else {
  // 	for (j=1; j<=n; j++) {
  // 		在第i行第j列放置一个棋子；
  // 		if (当前布局合法)
  // 			Trial(i+1, n);
  // 		移走第i行第j列的棋子；
  // 	}
  // }
}

/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
  let operation = s.split("");
  operation = s.split("").map((item, index) => s.substring(index, s.length));
  let result = s.split("").map((item) => 0);

  for (let i = 0; i < operation.length; i++) {
    let tempPos = startPos.map((item) => item);
    for (let j = 0; j < operation[i].length; j++) {
      if (operation[i][j] === "L") {
        tempPos[1] -= 1;
      } else if (operation[i][j] === "R") {
        tempPos[1] += 1;
      } else if (operation[i][j] === "U") {
        tempPos[0] -= 1;
      } else if (operation[i][j] === "D") {
        tempPos[0] += 1;
      }
      if (judge(tempPos, n)) {
        break;
      } else {
        result[i] += 1;
      }
    }
  }

  return result;
};
function judge(pos, n) {
  return (pos[1] >= n || pos[1] < 0) || (pos[0] >= n || pos[0] < 0);
}
