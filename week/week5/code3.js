/**
 * 贪心，每次都找最小的撞
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass, asteroids) {
  let result = mass;

  asteroids.sort((a, b) => a - b);
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] <= result) {
      result += asteroids[i];
    } else {
      return false;
    }
  }
  return true;
};

asteroidsDestroyed(10, [3, 9, 19, 5, 21]);
