// const is a little more complex than what you have here. The reference is immutable, but the value is not. So something like...
const obj = {name:"vishal"};
obj.name = "false"
console.log(obj.name)

//Redeclare const value
const toto = 42;
const foo = "bar";
console.log(toto);
			
//Some added script
{
    const toto = "hello world !";
    console.log(toto);
    console.log(foo);
}
//back to main script
console.log(toto);
