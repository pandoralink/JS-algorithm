var corpFlightBookings = function (bookings, n) {
  const diff = new Diff(new Array(n).fill(0));
  for (let k = 0; k < bookings.length; k++) {
    const i = bookings[k][0] - 1,
      j = bookings[k][1] - 1;
    diff.change(i, j, bookings[k][2]);
  }
  return diff.reset();
};

const Diff = function (arr) {
  const diff = new Array(arr.length).fill(0);
  diff[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    diff[i] = arr[i] - arr[i - 1];
  }
  this.diff = diff;
};
// BUG：这里的 this 怎么就变成了 corpFlightBookings 的呢？
Diff.prototype.change = (i, j, k) => {
  this.diff[i] += k;
  if (j < diff.length) {
    diff[j] -= k;
  }
};
Diff.prototype.reset = () => {
  const that = this;
  const res = new Array(that.diff.length).fill(0);
  for (let i = 0; i < this.diff.length; i++) {
    res[i] = that.diff[i] + res[i];
  }
  return res;
};

corpFlightBookings(
  [
    [1, 2, 10],
    [2, 3, 20],
    [2, 5, 25],
  ],
  5
);
