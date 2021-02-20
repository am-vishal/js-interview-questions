let num = 115246111;
let str = num.toString()
let arr = str.split('')
console.log(arr)
let newarr = [];
for(let i=0;i<arr.length; i++) {
    if(arr[i] == 1) {
        newarr.push(arr[i]); 
    }
// console.log(newarr)
// let joint = newarr.join();
}
console.log(newarr.join())
