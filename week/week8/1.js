/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const map = new Map(
    key
      .split("")
      .filter((element) => element !== " ")
      .map((element) => [element, 0])
  );
  let index = 0;
  for (const key of map.keys()) {
    map.set(key, index);
    index++;
  }
  const arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const res = message.split('');
  for (let i = 0; i < message.length; i++) {
    if (res[i] !== " ") {
      res[i] = arr[map.get(message[i])];
    }
  }
  return res.join('');
};
decodeMessage(
  "the quick brown fox jumps over the lazy dog",
  "vkbs bs t suepuv"
);
