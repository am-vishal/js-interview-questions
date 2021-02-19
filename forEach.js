//1
const array = ["one", "two", "three", "four"]
array.forEach((item, index)=>console.log(item, index));

//2
var numbers1 = [45, 4, 9, 16, 25];
var txt1 = "";
numbers1.forEach(myFunction1);
function myFunction1(value, index, array) {
  txt1 = txt1 + `\n` + value
}
console.log(txt1)

//3
var numbers = [45, 4, 9, 16, 25];
var txt2 = []
numbers.forEach((value) => txt2 +=  `\n` + value )
console.log(txt2)
