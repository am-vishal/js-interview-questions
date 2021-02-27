let str="tenet"
function isPalindrome(str) {
  // split the string to array, reverse the array, then join the array with ''
  return str === str.split('').reverse().join(''); 
}

isPalindrome(str); // return true
