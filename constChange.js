// const is a little more complex than what you have here. The reference is immutable, but the value is not. So something like...
const obj = {name:"vishal"};
obj.name = "false"
console.log(obj.name)
