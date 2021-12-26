/**
 * 第一题没什么好说的很简单
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
  sentences = sentences.map(item => item.split(" ").length);
  return Math.max(...sentences);
};