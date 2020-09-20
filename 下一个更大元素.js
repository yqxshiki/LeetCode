// 给定两个 没有重复元素 的数组 nums1 和 nums2 ，
// 其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。

// nums1 中数字 x 的下一个更大元素是指 x 在 nums2
// 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let result = new Array(nums1.length).fill(-1);
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      let index = nums2.indexOf(nums1[i]);
      let stack = [];
      for (let j = index; j < nums2.length; j++) {
        if (index == nums2.length - 1) break;

        while (stack.length && nums2[j] > nums2[stack[stack.length - 1]]) {
          stack.pop();
          result[i] = nums2[j];
        }

        stack.push(j);
      }
    }
  }
  console.log(result);
  return result;
};

nextGreaterElement([1], [1, 3, 4, 2]);
