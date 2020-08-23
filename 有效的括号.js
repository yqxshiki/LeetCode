// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if ((s.length = 0)) return true;
  //map
  let map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");
  //栈
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      //如果是左括号  就把map的value  也就是对应的右括号入栈
      stack.push(map.get(s[i]));
    } else {
      // 对比 当前s[i] 与栈内的最后一项比较
      if (s[i] !== stack.pop()) {
        //不相等 就是不匹配
        return false;
      }
    }
  }

  //循环完，如果栈里还有元素也是 不匹配
  if (stack.length !== 0) {
    return false;
  }

  return true;
};
