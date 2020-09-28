// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// 图片地址
// https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png
// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，
// 可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

// 示例:

// 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let len = height.length;
  if (len == 0) return 0;

  let left_max = [];
  let right_max = [];
  let result = 0;

  //记录左边最大值
  left_max[0] = height[0];
  for (let i = 1; i < len; i++) {
    left_max[i] = Math.max(left_max[i - 1], height[i]);
  }

  //记录右边最大值
  right_max[len - 1] = height[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    right_max[i] = Math.max(right_max[i + 1], height[i]);
  }
  //雨水面积
  for (let i = 0; i < len; i++) {
    result += Math.min(left_max[i], right_max[i]) - height[i];
  }
  return result;
};
