// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。
// 请根据这个假设，如果反转后整数溢出那么就返回 0。
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let str = x.toString();
  let result = "";
  //为负数
  if (str[0] == "-") {
    result = "-" + result;
  }
  //最后一项为0 删除
  if (str[str.length - 1] == 0) {
    str = str.substring(0, str.length - 1);
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== "-") {
      //不为负是  拼接
      result = result + str[i];
    }
  }
  //是否越界
  if (result > 2 ** 31 - 1 || result < "-" + 2 ** 31 - 1) {
    return 0;
  }
  return result;
};

reverse(2010);
