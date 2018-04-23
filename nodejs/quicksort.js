function quicksort(arr) {
  if (arr.length <= 0) {
    return arr;
  }

  var left = [], right = [];
  // 选择一个中间数（基数）
  var pivotIndex = Math.floor(arr.length / 2);
  // 取出中间数
  var pivot = arr.splice(pivotIndex, 1)[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }else {
      right.push(arr[i]);
    }
  }

  return quicksort(left).concat([pivot], quicksort(right));
}


var arr = [9,4,5,3,7,8,2,10,1];

var sortArr = quicksort(arr);

console.log(sortArr);
