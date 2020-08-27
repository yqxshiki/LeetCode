let arr = [7, 55, 20, 76, 84, 13, 30, 4];
//选择排序

function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    //最小值index  默认先为第一个值
    let min = i;

    for (let j = min + 1; j < arr.length; j++) {
      //后面数字小 就更新min
      if (arr[min] > arr[j]) {
        // 当前数组 最小值的index
        min = j;
      }
    }
    //交换
    temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

selectSort(arr);
