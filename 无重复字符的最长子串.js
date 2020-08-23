// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// "abcabcbb"
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) return 0;
  let set = new Set();
  //最长子串 长度
  let maxLength = 0;
  let i = 0,
    j = 0;

  for (i; i < s.length; i++) {
    if (set.has(s[i])) {
      // 子串里面有时， 删除之前子串里面的重复字符
      while (set.has(s[i])) {
        set.delete(s[j]);
        //删除至set里面没有重复字符
        j++;
      }
      set.add(s[i]);
    } else {
      //set里面 没有就添加 然后更新maxLength
      set.add(s[i]);
      maxLength = Math.max(maxLength, set.size);
    }
  }
  return maxLength;
};
