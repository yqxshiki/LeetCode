// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c
// 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例：
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 返回的结果
  let result = [];
  //排序
  nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < nums.length - 2; i++) {
    //第一项和 当前一项和后一项不相等时
    if (i == 0 || nums[i] !== nums[i - 1]) {
      let start = i + 1;
      //从结尾开始
      let end = nums.length - 1;

      while (start < end) {
        if (nums[i] + nums[start] + nums[end] === 0) {
          //符合时 添加到result
          result.push([nums[i], nums[start], nums[end]]);
          //寻找下一项
          start++;
          end--;
          //去重
          while (start < end && nums[start] === nums[start - 1]) {
            start++;
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--;
          }
        } else if (nums[i] + nums[start] + nums[end] < 0) {
          // 小于0 时
          start++;
        } else {
          // 大于0时
          end--;
        }
      }
    }
  }
  return result;
};
