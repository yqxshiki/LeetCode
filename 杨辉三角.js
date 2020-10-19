// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
// 在杨辉三角中，每个数是它左上方和右上方的数的和

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let arr = [];

  for (let i = 0; i < numRows; i++) {
    // 计算每个值装进数组中
    arr[i] = new Array(i + 1);

    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
  }
  return arr;
};
generate(5);
