let arr = [7, 21, 66, 851, 46, 72, 91, 11, 64];
//插入排序
function insertSort(arr) {
  let length = arr.length;
  //从index为1开始   为0时为局部有序
  for (let i = 1; i < length; i++) {
    //当前项
    var temp = arr[i];
    var j = i;
    // 判断当前值temp 是否小于 局部有序的最后一项
    while (arr[j - 1] > temp && j > 0) {
      //当存在时 将值进行向前一位 直到找到符合该值得位置
      arr[j] = arr[j - 1];
      j--;
    }
    //位置找到后 将当前值temp 放到 正确的位置
    arr[j] = temp;
  }

  return arr;
}
insertSort(arr);
