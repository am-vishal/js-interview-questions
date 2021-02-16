let str = "ajay"; //output: yaja
let newarray = str.split('');
let reversearray = [];

for (let i=newarray.length-1; i>=0; i--) {
push}
console.log(reversearray);


//Reverse String Using Function

function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}
 
reverseString("vishal");


function reverse(value) {
  return value.split('').reverse().join('');
}
console.log(reverse('ajay'))

// Reverse number fastest way
reverse = (num) => {
  let digit, result = 0
    while(num) {
      digit = num % 10
      result = (result * 10) + digit
        num = num/10|0
    }  
    return result
} 
reverse(852122)
