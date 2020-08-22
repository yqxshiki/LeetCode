// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (map.has(difference)) {
      // 有就 返回结果
      return [map.get(difference), i];
    } else {
      //map里面没有， 就添加 value做为key
      map.set(nums[i], i);
    }
  }
  return [];
};
