# JavaScript Interview Questions

**What are the possible ways to create objects in JavaScript?**
There are many ways to create objects in javascript as below,

1.	**Object constructor:** The simplest way to create an empty object is using Object constructor. Currently this approach is not recommended.

  	```var object = new Object();```

2.	**Object's create method:** The create method of Object creates a new object by passing the prototype object as a parameter.

  	```var object = Object.create(null);```

3.	**Object literal syntax:** The object literal syntax is equivalent to create method when it passes null as parameter.

    ```var object = {};```
    
4.	**Function constructor:** Create any function and apply the new operator to create object instances,

	function Person(name){
	 var object = {};
	 object.name=name;
	 object.age=23;
	 return object;
	}
	var object = new Person("Vishal");
  
5.	**Function constructor with prototype:** This is similar to function constructor but it uses prototype for their properties and methods,

```
	function Person(){}
	Person.prototype.name = "Vishal";
	var object = new Person();
```

This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

	function func {};
	 
	new func(x, y, z);
  
	 **(OR)**
   
	// Create a new instance using function prototype.
	var newInstance = Object.create(func.prototype)

	// Call the function
	var result = func.call(newInstance, x, y, z),

  // If the result is a non-null object then use it otherwise just use the new instance.
 	console.log(result && typeof result === 'object' ? result : newInstance);
  
6. **ES6 Class syntax:** ES6 introduces class feature to create the objects
```
  class Person {
	 constructor(name) {
	    this.name = name;
	 }
	}	 
	var object = new Person("Vishal");
```
7. **Singleton pattern:** A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.

```
var object = new function(){
	  this.name = "Vishal";
	}
``` 
**What is prototype chain?**
**Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. The prototype on object instance is available through Object.getPrototypeOf(object) or proto property whereas prototype on constructors function is available through object.prototype.

  Employee->Person->Object->Null
 
What is the difference between Call, Apply and Bind?
The difference between Call, Apply and Bind can be explained with below examples,

**Call:** The call() method invokes a function with a given this value and arguments provided one by one
```
	var employee1 = {firstName: 'Vishal', lastName: 'Kumar'};
	var employee2 = {firstName: 'Ajay', lastName: 'Nayak'};
	 
	function invite(greeting1, greeting2) {
	    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
	}
  
	invite.call(employee1, 'Hello', 'How are you?'); // Hello Vishal Kumar, How are you? 
  invite.call(employee2, 'Hello', 'How are you?'); // Hello Ajay Nayak, How are you?
 ```
  
**Apply:** Invokes the function and allows you to pass in arguments as an array
```
	var employee1 = {firstName: 'Vishal', lastName: 'Kumar'};
	var employee2 = {firstName: 'Ajay', lastName: 'Nayak'};
	 
	function invite(greeting1, greeting2) {
	    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
	}
  
	invite.apply(employee1, ['Hello', 'How are you?']); // Hello Vishal Kumar, How are you?
	invite.apply(employee2, ['Hello', 'How are you?']); // Hello Ajay Nayak, How are you?
 ```
**bind:** returns a new function, allowing you to pass in an array and any number of arguments
```
var employee1 = {firstName: 'Vishal', lastName: 'Kumar'};
	var employee2 = {firstName: 'Ajay', lastName: 'Nayak'};
	 
	function invite(greeting1, greeting2) {
	    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
	}
	 
	var inviteEmployee1 = invite.bind(employee1);
	var inviteEmployee2 = invite.bind(employee2);
	inviteEmployee1('Hello', 'How are you?'); // Hello Vishal Kumar, How are you?
	inviteEmployee2('Hello', 'How are you?'); // Hello Ajay Nayak, How are you?
```
Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for comma (separated list) and Apply is for Array. Whereas Bind creates a new function that will have this set to the first parameter passed to bind().
