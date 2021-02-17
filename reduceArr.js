const numbers = [1,2,3,4,5,6];
const sum = numbers.reduce((total, num) => total + num);
console.log(sum);
//Output:21

console.log([1,3,5].reduce((a,b)=>a+b,0))
//Output:9
