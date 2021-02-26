//Example:1
function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    if (i % 3 === 0) str += "fizz"
    if (i % 5 === 0) str += "buzz"
    if (str === "") str = i;
  
    console.log(str);
  }
}
 fizzBuzz2(25)

//Example:2
for (let i=1; i <= 25; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

//Example:3
for (let i = 1; i <= 30; i++) {
  let fizz = i % 3 == 0, buzz = i % 5 == 0;
  console.log(fizz ? buzz ? "FizzBuzz" : "Fizz" : buzz ? "Buzz" : i);
}

//Example:4
for (let i = 1; i <= 30; i++) {
    let out = '';
    if (i % 3 === 0) out += 'Fizz';
    if (i % 5 === 0) out += 'Buzz';
    console.log(out || i);
}
