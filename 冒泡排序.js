let arr = [7, 21, 66, 851, 46, 72, 91, 11, 64];

function bubbleSort(arr) {
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    //每完成一个 比较数据就少一个
    for (let j = 0; j < length - 1 - i; j++) {
      // 大数向右边移
      if (arr[j] > arr[j + 1]) {
        //交换
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
