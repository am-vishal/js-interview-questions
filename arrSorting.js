//1
sort = () => {
let points = [40, 119, 1, 5, 25, 10];
points.sort((a, b) => a-b);
console.log(points);
}
sort()
//Output: [ 1, 5, 10, 25, 40, 119 ]


//2
let arr = [1,5,47,2,85,3,45,-654];
console.log(arr.sort((a , b) => a-b))
//Output: [ -654,  1,  2,  3, 5, 45, 47, 85 ]
