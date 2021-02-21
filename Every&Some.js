//every()
let numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every((value =>value > 18 ))
console.log(allOver18)
or
let numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every((value) =>value > 18)
console.log(allOver18)

//some()
let numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some((value) => value > 18);
console.log(someOver18);
