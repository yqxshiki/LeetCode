// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

// 注意：你不能在买入股票前卖出股票。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length == 0) return 0;
  //最小价格
  let min = prices[0];
  //最大利润
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      //获取最小价格
      min = prices[i];
    } else if (prices[i] - min > profit) {
      //更新最大利润
      profit = prices[i] - min;
    }
  }
  return profit;
};
