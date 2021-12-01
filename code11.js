var MinStack = function () {
  this.stack = [];
  this.min = null;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.min === null) {
    this.min = val;
  }
  if (val <= this.min && val !== undefined) {
    this.min = val;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let top = this.stack.length - 1;
  if (this.stack[top] === this.min) {
    this.stack.pop();
    let result = this.stack[0] ? this.stack[0] : null;
    this.stack.forEach((item) => {
      if (item <= result) {
        result = item;
      }
    });
    this.min = result;
  } else {
    this.stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  let top = this.stack.length - 1;
  return this.stack[top];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
 * 官方解法
 * 辅助栈
 */
 var MinStack = function() {
  this.x_stack = [];
  this.min_stack = [Infinity];
};

MinStack.prototype.push = function(x) {
  this.x_stack.push(x);
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
};

MinStack.prototype.pop = function() {
  this.x_stack.pop();
  this.min_stack.pop();
};

MinStack.prototype.top = function() {
  return this.x_stack[this.x_stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.min_stack[this.min_stack.length - 1];
};

let obj = new MinStack();
obj.push(2);
obj.push(0);
obj.push(3);
obj.push(0);
obj.getMin();
obj.pop();
obj.getMin();
obj.pop();
obj.getMin();
obj.pop();
obj.getMin();

//[[],[2147483646],[2147483646],[2147483647],[],[],[],[],[],[],[2147483647],[],[],[-2147483648],[],[],[],[]]
obj = new MinStack();
obj.push(2147483646);
obj.push(2147483646);
obj.push(2147483647);
obj.top();
obj.pop();
obj.getMin();
obj.pop();
obj.getMin();
obj.pop();
obj.push(2147483647);
obj.top();
obj.getMin();
obj.push(2147483648);
obj.top();
obj.getMin();
obj.pop();
obj.getMin();
