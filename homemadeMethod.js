let points = [1,2,3,14,50,6]
// 'home made' Method fastest Method
function myArrayMax(arr) {
  var len = arr.length;
  var max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
console.log(myArrayMax(points));
