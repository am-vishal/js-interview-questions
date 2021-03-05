let str="tenet"
function isPalindrome(str) {
  // split the string to array, reverse the array, then join the array with ''
  return str === str.split('').reverse().join(''); 
}

isPalindrome(str); // return true

//Example:2
let string = "t  E ne T ";
let regex = /[^a-z0-9]/g;
function stringForLoop(str) {
  str = str.toLowerCase().replace(regex, '');
  let len = str.length;  
  for (let i = 0; i < len; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
  }
  return true;
}
console.log('is palindrom',stringForLoop(string));
//Output: is palindrom True
