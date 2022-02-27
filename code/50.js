var carPooling = function (trips, capacity) {
  const station = new Array(2000).fill(0);
  for (let i = 0; i < trips.length; i++) {
    const start = trips[i][1];
    const end = trips[i][2];
    for (let j = start; j < end; j++) {
      station[j] += trips[i][0];
      if (station[j] > capacity) {
        return false;
      }
    }
  }
  return true;
};

var carPooling = function (trips, capacity) {
  // 车站初始值全为 0，差分数组和车站初始数组相同
  const station = new Array(2000).fill(0);
  for (let i = 0; i < trips.length; i++) {
    const start = trips[i][1];
    const end = trips[i][2];
    station[start] += trips[i][0];
    station[end] -= trips[i][0];
  }
  // 将差分数组还原
  for (let i = 1; i < station.length; i++) {
    station[i] += station[i - 1];
    if (station[i] > capacity) {
      return false;
    }
  }
  // 注意不要漏掉了差分数组索引为 0 的校验
  if (station[0] > capacity) {
    return false;
  }
  return true;
};

carPooling(
  [
    [2, 1, 5],
    [3, 3, 7],
  ],
  4
);

carPooling(
  [
    [9, 0, 1],
    [3, 3, 7],
  ],
  4
);
