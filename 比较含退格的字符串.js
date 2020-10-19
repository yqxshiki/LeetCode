// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，
// 并返回结果。 # 代表退格字符。

// 注意：如果对空文本输入退格字符，文本继续为空。

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  function arrEach(target, result) {
    result = result || [];
    for (let i = 0; i < target.length; i++) {
      //当前项为字母时
      if (target[i] !== "#") {
        //将字符添加到数组中
        result.push(target[i]);
      } else {
        //当字符为“#” 并且不是第一个时 删除数组中的最后一项
        if (i !== 0) {
          result.pop();
        }
      }
    }
    return result;
  }
  //将数组转化为字符串比较
  return arrEach(S).toString() == arrEach(T).toString();
};

// backspaceCompare("ab#c", "ad#c");
