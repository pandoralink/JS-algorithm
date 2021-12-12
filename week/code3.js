/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  let result = new Map();
  for (let i = 0; i < rings.length; i++) {
    if (result.has(rings[i + 1])) {
      result.set(rings[i + 1], result.get(rings[i + 1]) + rings[i]);
      i++;
    } else {
      result.set(rings[i + 1], rings[i]);
      i++;
    }
  }
  let RGBNum = 0;
  for (let [key, value] of result) {
    if (/R/.test(value) && /G/.test(value) && /B/.test(value)) {
      RGBNum++;
    }
  }
  return RGBNum;
};

/**
 * 位运算给我秀麻了
 */
/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  let result = [];
  for (let i = 0; i < rings.length; i++) {
    if (rings[i] === "R") {
      result[rings[i + 1] - 0] = result[rings[i + 1]]
        ? result[rings[i + 1]] | 4
        : 0 | 4;
    } else if (rings[i] === "G") {
      result[rings[i + 1] - 0] = result[rings[i + 1]]
        ? result[rings[i + 1]] | 2
        : 0 | 2;
    } else if (rings[i] === "B") {
      result[rings[i + 1] - 0] = result[rings[i + 1]]
        ? result[rings[i + 1]] | 1
        : 0 | 1;
    }
  }
  let RGBNum = 0;
  result.forEach((item) => {
    if (item === 7) {
      RGBNum++;
    }
  });
  return RGBNum;
};

countPoints("G4");
countPoints("B0R0G0R9R0B0G0");
