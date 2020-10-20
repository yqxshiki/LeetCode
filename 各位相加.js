// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
// 输入: 38
// 输出: 2
// 解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) return num;

  while (num >= 10) {
    num = sum(num);
  }

  function sum(target) {
    let s = 0;
    while (target > 0) {
      // % 取余
      s += target % 10;
      // / 除以 得整
      target = parseInt(target / 10);
    }
    return s;
  }

  return num;
};
addDigits(387);
