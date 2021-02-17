let arr = [1,2,3,4,5]
let [newarr] = arr.slice(-1);
arr.pop();
arr.unshift(newarr)
console.log(arr)
