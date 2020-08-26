// [1, [2, [3, [4, 5]]], 6] -> [1, 2, 3, 4, 5, 6]
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 * @return {Integer[]}
 */
let flatten = (nestedList) => {
  let result = [];

  function loop(arr, result) {
    for (let i = 0; i < arr.length; i++) {
      //判断是否是数组
      if (Array.isArray(arr[i])) {
        // 是数组。递归执行
        loop(arr[i], result);
      } else {
        //不是数组 添加到result
        result.push(arr[i]);
      }
    }
  }

  loop(nestedList, result);
  return result;
};
