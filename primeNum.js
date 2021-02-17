//Step 1 : Using while loop

function isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}
isPrime(13)

//Step 2 : Using for loop
function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
isPrime(13)

//Step 3 : Using for loop
function isPrime (n) {
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++) {
        if (n % i == 0) {
            return false;
        }
      }
           return true;
  }
  
 //Step 4 : Using algorithm | fastest way to get prime num
 
 "use strict";
function primeSieve(n){
  var a = Array(n = n/2),
      t = (Math.sqrt(4+8*n)-2)/4,
      u = 0,
      r = [];
  for(var i = 1; i <= t; i++){
    u = (n-i)/(1+2*i);
    for(var j = i; j <= u; j++) a[i + j + 2*i*j] = true;
  }
  for(var i = 0; i<= n; i++) !a[i] && r.push(i*2+1);
  return r;
}

var primes = [];
console.time("primes");
primes = primeSieve(1000000);
console.timeEnd("primes");
console.log(primes.length);
