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

carPooling(
  [
    [2, 1, 5],
    [3, 3, 7],
  ],
  4
);
