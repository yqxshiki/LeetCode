// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 输入：n = 3
// 输出：[
//        "((()))",
//        "(()())",
//        "(())()",
//        "()(())",
//        "()()()"
//      ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];

  function loop(left, right, n, str, target) {
    if (left == n && right == n) {
      return target.push(str);
    }

    if (left < n) loop(left + 1, right, n, str + "(", target);

    if (right < left) loop(left, right + 1, n, str + ")", target);
  }

  loop(0, 0, n, "", result);
  return result;
};
