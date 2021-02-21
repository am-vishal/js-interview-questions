//Example:1
factorial = (x) => {
  if (x===0) {return 1;}
  return x*factorial(x-1);
}
factorial(5)


//Example:2
factorial = (n) => {
  if (n<=0) return "Invaild Number!"
  if (n===1) return 1
  return n*factorial(n-1)
}
factorial(4)

//Example:3
let fact = 1;
function factorial(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i)
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(4))

//Example:4
function factorial(n) {
  if(n==1) return 1
  return n*factorial(n-1);
}
factorial(4)
