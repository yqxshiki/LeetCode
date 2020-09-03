// 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  // 暴力
  // let result = new Array(T.length).fill(0);
  // for (let i = 0; i < T.length; i++) {
  //   for (let j = i + 1; j < T.length; j++) {
  //     if (T[i] < T[j]) {
  //       result[i] = j - i;
  //       break;
  //     }
  //   }
  // }
  // return result;

  //单调栈
  let stack = [];
  let result = new Array(T.length).fill(0);
  for (let i = 0; i < T.length; i++) {
    //栈不为空 并且 当日温度大于 栈顶元素 就表示找到更高的气温
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      // 出栈
      let j = stack.pop();

      result[j] = i - j;
    }
    // 每日循环 入栈
    stack.push(i);
  }
  return result;
};
let T = [73, 74, 75, 71, 69, 72, 76, 73];
// [1, 1, 4, 2, 1, 1, 0, 0]
dailyTemperatures(T);
