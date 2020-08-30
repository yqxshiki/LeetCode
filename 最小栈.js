/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];

  this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  //如果是第一个数 或者 x 比this.min 的栈顶小  就入栈
  if (this.min.length == 0 || this.min[this.min.length - 1] >= x) {
    this.min.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length == 0) {
    return false;
  } else {
    //stack 的栈顶 和 this.min 的栈顶比较 相同 就都出栈
    if (this.min[this.min.length - 1] == this.stack[this.stack.length - 1]) {
      this.min.pop();
    }
    this.stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length == 0) return false;

  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stack.length == 0) {
    return false;
  } else {
    return this.min[this.min.length - 1];
  }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
