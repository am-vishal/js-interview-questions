//Example:1
let arr = [6,2,11,3];
arr.reduce((a,b)=>a+b)

//Example:2
let arr = [1,2,3,4,7];
let total=0;
for(let i in arr) {
     total += arr[i];
    }

//Example:3
function sumArray(array) {
  for (
    var
      index = 0,              // The iterator
      length = array.length,  // Cache the array length
      sum = 0;                // The total amount
      index < length;         // The "for"-loop condition
      sum += array[index++]   // Add number on each iteration
  );
  return sum;
}

//Example:4
function aVeryBigSum(ar) {
let totalSum = 0;
for(let i=0; i<ar.length;i++) {
    totalSum += ar[i];
     }
  return totalSum;
}
aVeryBigSum([101101,1021021,10310321,104014,101010])

//Example:5
let arr=[1,2,3];
let i = arr.length;
let sum = 0;
while (--i) sum += arr[i];

//Example:6 || Worst Approch
eval([1,2,3,"4"].join("+"))
//Output:10
