# JavaScript Interview Questions

## What are the possible ways to create objects in JavaScript? 
There are many ways to create objects in javascript as below,

1.	**Object constructor:** The simplest way to create an empty object is using Object constructor. Currently this approach is not recommended.

  	```js
	var object = new Object();
	```

2.	**Object's create method:** The create method of Object creates a new object by passing the prototype object as a parameter.

  	```js
	object = Object.create(null);
	```

3.	**Object literal syntax:** The object literal syntax is equivalent to create method when it passes null as parameter.

    ```js
    var object = {};
    ```
    
4.	**Function constructor:** Create any function and apply the new operator to create object instances,
```js
	function Person(name){
	 var object = {};
	 object.name=name;
	 object.age=23;
	 return object;
	}
	var object = new Person("Vishal");
```
5.	**Function constructor with prototype:** This is similar to function constructor but it uses prototype for their properties and methods,

```js
	function Person(){}
	Person.prototype.name = "Vishal";
	var object = new Person();
```

This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.
```js
	function func {};
	 
	new func(x, y, z);
  
	 **(OR)**
   
	// Create a new instance using function prototype.
	var newInstance = Object.create(func.prototype)

	// Call the function
	var result = func.call(newInstance, x, y, z),

  // If the result is a non-null object then use it otherwise just use the new instance.
 	console.log(result && typeof result === 'object' ? result : newInstance);
```
6. **ES6 Class syntax:** ES6 introduces class feature to create the objects
```js
  class Person {
	 constructor(name) {
	    this.name = name;
	 }
	}	 
	var object = new Person("Vishal");
```
7. **Singleton pattern:** A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.

```js
var object = new function(){
	  this.name = "Vishal";
	}
``` 
## What is prototype chain?
**Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. The prototype on object instance is available through Object.getPrototypeOf(object) or proto property whereas prototype on constructors function is available through object.prototype.

  Employee->Person->Object->Null
 
## What is the difference between Call, Apply and Bind?
The difference between Call, Apply and Bind can be explained with below examples,

**Call:** The call() method invokes a function with a given this value and arguments provided one by one
```js
	var employee1 = {firstName: 'Vishal', lastName: 'Kumar'};
	var employee2 = {firstName: 'Ajay', lastName: 'Nayak'};
	 
	function invite(greeting1, greeting2) {
	    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
	}
  
	invite.call(employee1, 'Hello', 'How are you?'); // Hello Vishal Kumar, How are you? 
  	invite.call(employee2, 'Hello', 'How are you?'); // Hello Ajay Nayak, How are you?
 ```
  
**Apply:** Invokes the function and allows you to pass in arguments as an array
```js
	var employee1 = {firstName: 'Vishal', lastName: 'Kumar'};
	var employee2 = {firstName: 'Ajay', lastName: 'Nayak'};
	 
	function invite(greeting1, greeting2) {
	    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
	}
  
	invite.apply(employee1, ['Hello', 'How are you?']); // Hello Vishal Kumar, How are you?
	invite.apply(employee2, ['Hello', 'How are you?']); // Hello Ajay Nayak, How are you?
 ```
**bind:** returns a new function, allowing you to pass in an array and any number of arguments
```js
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

## What is JSON and its common operations?
**JSON** is a text-based data format following JavaScript object syntax, which was popularized by *Douglas Crockford*. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json Parsing: Converting a string to a native object

```js
JSON.parse(text)
```

Stringification: converting a native object to a string so it can be transmitted across the network

```js
JSON.stringify(object)
```

## What is the purpose of array slice method?
The **slice()** method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end. Some of the examples of this method are,

```js
	let arrayIntegers = [1, 2, 3, 4, 5];
	let arrayIntegers1 = arrayIntegers.slice(0,2); // returns [1,2]
	let arrayIntegers2 = arrayIntegers.slice(2,3); // returns [3]
	let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
```
**Note:** Slice method won't mutate the original array but it returns the subset as new array.

## How do you compare Object and Map?
Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.

1.	The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.

2.	The keys in Map are ordered while keys added to object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.

3.	You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.

4.	A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.

5.	An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.

6.	A Map may perform better in scenarios involving frequent addition and removal of key pairs.

## What is the difference between == and === operators?
JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators takes type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,

1.	Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.

2.	Two numbers are strictly equal when they are numerically equal. i.e, Having the same number value. There are two special cases in this,

1.	NaN is not equal to anything, including NaN.

2.	Positive and negative zeros are equal to one another.

3.	Two Boolean operands are strictly equal if both are true or both are false.

4.	Two objects are strictly equal if they refer to the same Object.

5.	Null and Undefined types are not equal with ===, but equal with ==. i.e, null===undefined --> false but null==undefined --> true

Some of the example which covers the above cases,

```js
	0 == false   // true
	0 === false  // false
	1 == "1"     // true
	1 === "1"    // false
	null == undefined // true
	null === undefined // false
	'0' == false // true
	'0' === false // false
	[]==[] or []===[] //false, refer different objects in memory
	{}=={} or {}==={} //false, refer different objects in memory
```

## What are lambda or arrow functions?
An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target. These function are best suited for non-method functions, and they cannot be used as constructors.

## What is a first class function?
In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.
For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener

```js
	const handler = () => console.log ('This is a click handler function');
	document.addEventListener ('click', handler);
```
## What is a first order function?
First-order function is a function that doesn’t accept other function as an argument and doesn’t return a function as its return value.

```js
const firstOrder = () => console.log ('I am a first order function!');
```

## What is a higher order function?
Higher-order function is a function that accepts other function as an argument or returns a function as a return value.

```js
	const firstOrderFunc = () => console.log ('Hello I am a First order function');
	const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc ();
	higherOrder (firstOrderFunc);
```

## What is a unary function?
Unary function (i.e. monadic) is a function that accepts exactly one argument. Let us take an example of unary function. It stands for single argument accepted by a function.

```js
const unaryFunction = a => console.log (a + 10); // Add 10 to the given argument and display the value
```
## What is currying function?
Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function. Let's take an example of n-ary function and how it turns into a currying function
```js
	const multiArgFunction = (a, b, c) => a + b + c;
	const curryUnaryFunction = a => b => c => a + b + c;
	curryUnaryFunction (1); // returns a function: b => c =>  1 + b + c
	curryUnaryFunction (1) (2); // returns a function: c => 3 + c
	curryUnaryFunction (1) (2) (3); // returns the number 6
```
Curried functions are great to improve code re-usability and functional composition.

## What is a pure function?
A Pure function is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value. Let's take an example to see the difference between pure and impure functions,
```js
	//Impure
	let numberArray = [];
	const impureAddNumber = number => numberArray.push (number);
	//Pure
	const pureAddNumber = number => argNumberArray =>
	  argNumberArray.concat ([number]);
	 
	//Display the results
	console.log (impureAddNumber (6)); // returns 6
	console.log (numberArray); // returns [6]
	console.log (pureAddNumber (7) (numberArray)); // returns [6, 7]
	console.log (numberArray); // returns [6]

```
As per above code snippets, Push function is impure itself by altering the array and returning an push number index which is independent of parameter value. Whereas Concat on the other hand takes the array and concatenates it with the other array producing a whole new array without side effects. Also, the return value is a concatenation of previous array. Remember that Pure functions are important as they simplify unit testing without any side effects and no need for dependency injection. They also avoid tight coupling and makes harder to break your application by not having any side effects. These principles are coming together with Immutability concept of ES6 by giving preference to const over let usage.

## What is the purpose of let keyword?
The let statement declares a block scope local variable. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used. Whereas variables declared with the var keyword used to define a variable globally, or locally to an entire function regardless of block scope. Let's take an example to demonstrate the usage,

```js
let counter = 30;
	if (counter === 30) {
	  let counter = 31;
	  console.log(counter); // 31
	}
	console.log(counter); // 30 (because if block variable won't exist here)
```
## What is the reason to choose the name let as keyword?
Let is a mathematical statement that was adopted by early programming languages like Scheme and Basic. It has been borrowed from dozens of other languages that use let already as a traditional keyword as close to var as possible.

## How do you redeclare variables in switch block without an error?

```js
	let counter = 1;
	switch(x) {
	  case 0:
	    let name;
	    break;
	   case 1:
	    let name; // SyntaxError for redeclaration.
	    break;
	}
```
To avoid this error, you can create a nested block inside a case clause will create a new block scoped lexical environment.

```js
	let counter = 1;
	    switch(x) {
	      case 0: {
	        let name;
	        break;
	      }
	      case 1: {
	        let name; // No SyntaxError for redeclaration.
	        break;
	      }
	    }
```

## What is Temporal Dead Zone?
The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone. Let's see this behavior with an example,

```js
	function somemethod() {
	  console.log(counter1); // undefined
	  console.log(counter2); // ReferenceError
	  var counter1 = 1;
	  let counter2 = 2;
	}
```

## What is IIFE(Immediately Invoked Function Expression)?
IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

```js
	(function ()
	    {
	      // logic here
	    }
	 )
	();
```

The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,

```js
	(function ()
	        {
	          var message = "IIFE";
	          console.log(message);
	        }
	 )
	();
	console.log(message); //Error: message is not defined
```
## What is the benefit of using modules?
There are a lot of benefits to using modules in favour of a sprawling. Some of the benefits are,
1.	Maintainablity
2.	Reusability
3.	Namespacing

## What is memoization?
Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache. Let's take an example of adding function with memoization,

```js
	const memoizAddition = () => {
	  let cache = {};
	 return (value) => {
	  if (value in cache) {
	   console.log('Fetching from cache');
	   return cache[value]; //Here, cache.value cannot be used as property name starts with the number which is not valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
	  } else {
	   console.log('Calculating result');
	   let result = value + 20;
	   cache[value] = result;
	   return result;
	  }
	 }
	}
	// returned function from memoizAddition
	const addition = memoizAddition();
	console.log(addition(20)); //output: 40 calculated
	console.log(addition(20)); //output: 40 cached

```

## What is Hoisting?
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting,

```js
	console.log(message); //output : undefined
	var message = 'The variable Has been hoisted';
```
The above code looks like as below to the interpreter,

```js
	var message;
	console.log(message);
	message = 'The variable Has been hoisted';
```

## What are classes in ES6?
In ES6, Javascript classes are primarily syntactical sugar over JavaScript’s existing prototype-based inheritance. For example, the prototype based inheritance written in function expression as below,

```js
	function Bike(model,color) {
	    this.model = model;
	    this.color = color;
	}
	 
	Bike.prototype.getDetails = function() {
	    return this.model + ' bike has' + this.color + ' color';
	};
```
Whereas ES6 classes can be defined as an alternative

```js
	class Bike{
	  constructor(color, model) {
	    this.color= color;
	    this.model= model;
	  }
	 
	  getDetails() {
	    return this.model + ' bike has' + this.color + ' color';
	  }
	}
```

## What are closures?
A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains

1.	Own scope where variables defined between its curly brackets

2.	Outer function’s variables

3.	Global variables Let's take an example of closure concept,

```js
	function Welcome(name){
	  var greetingInfo = function(message){
	   console.log(message+' '+name);
	  }
	return greetingInfo;
	}
	var myFunction = Welcome('John');
	myFunction('Welcome '); //Output: Welcome John
	myFunction('Hello Mr.'); //output: Hello Mr.John
```
As per the above code, the inner function(greetingInfo) has access to the variables in the outer function scope(Welcome) even after outer function has returned.

## What is a “closure” in JavaScript? Provide an example.
A closure is a function defined inside another function (called the parent function), and has access to variables that are declared and defined in the parent function scope.
The closure has access to variables in three scopes:<br/>
•	Variables declared in their own scope<br/>
•	Variables declared in a parent function scope<br/>
•	Variables declared in the global namespace<br/>

```js
	var globalVar = "abc"; 
	// Parent self invoking function 
	(function outerFunction (outerArg) { // begin of scope outerFunction
	    // Variable declared in outerFunction function scope 
	    var outerFuncVar = 'x';    
	    // Closure self-invoking function 
	    (function innerFunction (innerArg) { // begin of scope innerFunction
	        // variable declared in innerFunction function scope
	        var innerFuncVar = "y"; 
	        console.log(          
	            "outerArg = " + outerArg + "\n" +
	            "outerFuncVar = " + outerFuncVar + "\n" +
	            "innerArg = " + innerArg + "\n" +
	            "innerFuncVar = " + innerFuncVar + "\n" +
	            "globalVar = " + globalVar);
	 
	    }// end of scope innerFunction)(5); // Pass 5 as parameter 
	}// end of scope outerFunction )(7); // Pass 7 as parameter 

```
<ins>innerFunction</ins> is closure that is defined inside <ins>outerFunction</ins> and has access to all variables declared and defined in the <ins>outerFunction</ins> scope. In addition, the function defined inside another function as a closure will have access to variables declared in the <ins>global namespace</ins>.

Thus, the output of the code above would be:

```js
	outerArg = 7
	outerFuncVar = x
	innerArg = 5
	innerFuncVar = y
	globalVar = abc
```

**Example:2**

**#recursive #async**

💡A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain.

```js
	var x = 1;
	(function(y) {
	    var i = "i";
	    console.log("i:" + i);
	    console.log("x:" + x);
	    console.log("y:" + y);
	    (function(z) {
	        var j = "j";
	        console.log("i:" + i);
	        console.log("j:" + j);
	        console.log("x:" + x);
	        console.log("y:" + y);
	        console.log("z:" + z);
	    })(3);
	})(2);
```

## What are modules?
Modules refers small units of independent, reusable code and also act as foundation of many JavaScript design patterns. Most of the JavaScript modules export an object literal, a function, or a constructor

## What is scope in javascript?
Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

## What is a service worker?
A Service worker is basically a script (JavaScript file) that runs in background, separate from a web page and provide features that don't need a web page or user interaction. Some of the major features of service workers are Rich offline experiences(offline first web application development), periodic background syncs, push notifications, intercept and handle network requests and programmatically managing a cache of responses.

## How do you manipulate DOM using service worker?
Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the ***postMessage*** interface, and those pages can manipulate the DOM.

## What is a post message?
Post message is a method that enables cross-origin communication between Window objects.(i.e, between a page and a pop-up that it spawned, or between a page and an iframe embedded within it). Generally, scripts on different pages are allowed to access each other if and only if the pages follow same-origin policy(i.e, pages share the same protocol, port number, and host).

## How do you reuse information across service worker restarts?
The problem with service worker is that it get terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's ***onfetch*** and ***onmessage*** handlers. In this case, service workers will have access to IndexedDB API in order to persist and reuse across restarts.

## What is IndexedDB?
IndexedDB is a low-level API for client-side storage of larger amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data.

## What is web storage?
Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion than using cookies. The web storage provides two mechanisms for storing data on the client.
1.	**Local storage:** It stores data for current origin with no expiration date.
2.	**Session storage:** It stores data for one session and the data is lost when the browser tab is closed.

___

## Why do you need a Cookie?
Cookies are used to remember information about the user profile(such as username). It basically involves two steps,

1.	When a user visits a web page, user profile can be stored in a cookie.

2.	Next time the user visits the page, the cookie remembers user profile.

3.	**What are the options in a cookie?**
	 There are few below options available for a cookie,
	  1. By default, the cookie is deleted when the browser is closed but you can change this behavior by setting expiry date (in UTC time).
	  2. document.cookie = "username=John expires=Sat, 8 Jun 2019 12:00:00 UTC";
	  3. By default, the cookie belongs to a current page. But you can tell the browser what path the cookie belongs to using a path parameter.
	  4. document.cookie = "username=John path=/services";
	  
4.	How do you delete a cookie?
	You can delete a cookie by setting the expiry date as a passed date. You don't need to specify a cookie value in this case. For example, you can delete a username cookie in the current page as below.
```js
	document.cookie = "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";
```
**Note:** You should define the cookie path option to ensure that you delete the right cookie. Some browsers doesn't allow to delete a cookie unless you specify a path parameter.

## What is the main difference between local Storage and session Storage?
LocalStorage is same as SessionStorage but it persists the data even when the browser is closed and reopened(i.e it has no expiration time) whereas in sessionStorage data gets cleared when the page session ends.
<br/>
## How do you access web storage?
The Window object implements the ***WindowLocalStorage*** and ***WindowSessionStorage*** objects which has ***localStorage***(window.localStorage) and ***sessionStorage***(window.sessionStorage) properties respectively. These properties create an instance of the Storage object, through which data items can be set, retrieved and removed for a specific domain and storage type (session or local). For example, you can read and write on local storage objects as below
```js
	localStorage.setItem('logo', document.getElementById('logo').value);
	localStorage.getItem('logo');
```

## What are the methods available on session storage?
The session storage provided methods for reading, writing and clearing the session data
```js
	// Save data to sessionStorage
	sessionStorage.setItem('key', 'value');
	 
	// Get saved data from sessionStorage
	let data = sessionStorage.getItem('key');
	 
	// Remove saved data from sessionStorage
	sessionStorage.removeItem('key');
	 
	// Remove all saved data from sessionStorage
	sessionStorage.clear();
```
## What is a storage event and its event handler?
The StorageEvent is an event that fires when a storage area has been changed in the context of another document. Whereas onstorage property is an EventHandler for processing storage events. The syntax would be as below
```js
	 window.onstorage = functionRef;
```
Let's take the example usage of onstorage event handler which logs the storage key and it's values
```js	window.onstorage = function(e) {
	  console.log('The ' + e.key +
	    ' key has been changed from ' + e.oldValue +
	    ' to ' + e.newValue + '.');
	};
```

## Why do you need web storage?
Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Also, the information is never transferred to the server. Hence this is recommended approach than Cookies.

## How do you check web storage browser support?
You need to check browser support for localStorage and sessionStorage before using web storage,
```js
	if (typeof(Storage) !== "undefined") {
	  // Code for localStorage/sessionStorage.
	} else {
	  // Sorry! No Web Storage support..
	}
```

## How do you check web workers browser support?
You need to check browser support for web workers before using it
```js
	if (typeof(Worker) !== "undefined") {
	  // code for Web worker support.
	} else {
	  // Sorry! No Web Worker support..
	}
```

## Give an example of web worker?
You need to follow below steps to start using web workers for counting example
1.	Create a Web Worker File: You need to write a script to increment the count value. Let's name it as counter.js

```js
	let i = 0;
	function timedCount() {
	  i = i + 1;
	  postMessage(i);
	  setTimeout("timedCount()",500);
	}
	 
	timedCount();
```

Here *postMessage()* method is used to post a message back to the HTML page.
<br/>

2. Create a Web Worker Object: You can create a web worker object by checking for browser support. Let's name this file as web_worker_example.js

```js
	if (typeof(w) == "undefined") {
	  w = new Worker("counter.js");
	}
```

and we can receive messages from web worker

```js
	w.onmessage = function(event){
	  document.getElementById("message").innerHTML = event.data;
	};
```

Terminate a Web Worker: Web workers will continue to listen for messages (even after the external script is finished) until it is terminated. You can use terminate() method to terminate listening the messages.

```js
	w.terminate();
```

	Reuse the Web Worker: If you set the worker variable to undefined you can reuse the code
	
```js
	w = undefined;
```

## What are the restrictions of web workers on DOM?
WebWorkers don't have access to below javascript objects since they are defined in an external files

1.	Window object
2.	Document object
3.	Parent object

## What is the difference between undefined and not defined in JavaScript?

In JavaScript, if you try to use a variable that doesn't exist and has not been declared, then JavaScript will throw an error var name is not defined and script will stop executing. However, if you use typeof undeclared_variable, then it will return undefined.
<br/>
Before getting further into this, let's first understand the difference between declaration and definition.
<br/>
Let's say var x is a declaration because you have not defined what value it holds yet, but you have declared its existence and the need for memory allocation.
<br/>

```js
	var x; // declaring x
	console.log(x); //output: undefined 
```

Here *var x = 1* is both a declaration and definition (also we can say we are doing an initialisation). In the example above, the declaration and assignment of value happen inline for variable x. In JavaScript, every variable or function declaration you bring to the top of its current scope is called *hoisting*.
<br/>
The assignment happens in order, so when we try to access a variable that is declared but not defined yet, we will get the result undefined.

```js
	var x; // Declaration
	if(typeof x === 'undefined') // Will return true
```
If a variable that is neither declared nor defined, when we try to reference such a variable we'd get the result *not defined*.

```js
	console.log(y);  // Output: ReferenceError: y is not defined
```

**What will be the output of the code below?**

```js
	var y = 1;
	  if (function f(){}) {
	    y += typeof f;
	  }
	  console.log(y);
```

The output would be *1undefined*. The if condition statement evaluates using *eval*, so *eval(function f(){})* returns *function f(){}* (which is true). Therefore, inside the *if* statement, executing *typeof f* returns *undefined* because the *if* statement code executes at run time, and the statement inside the *if* condition is evaluated during run time.

```js
	var k = 1;
	  if (1) {
	    eval(function foo(){});
	    k += typeof foo;
	  }
	  console.log(k); 
```

The code above will also output 1undefined.

```js
	var k = 1;
	  if (1) {
	    function foo(){};
	    k += typeof foo;
	  }
	  console.log(k); // output 1function
```

## What is the drawback of creating true private methods in JavaScript?
One of the drawbacks of creating true private methods in JavaScript is that they are very memory-inefficient, as a new copy of the method would be created for each instance.

```js
	var Employee = function (name, company, salary) {
	    this.name = name || "";       //Public attribute default value is null
	    this.company = company || ""; //Public attribute default value is null
	    this.salary = salary || 5000; //Public attribute default value is null
	 
	    // Private method
	    var increaseSalary = function () {
	        this.salary = this.salary + 1000;
	    };
	 
	    // Public method
	    this.dispalyIncreasedSalary = function() {
	        increaseSlary();
	        console.log(this.salary);
	    };
	};
	 
	// Create Employee class object
	var emp1 = new Employee("John","Pluto",3000);
	// Create Employee class object
	var emp2 = new Employee("Merry","Pluto",2000);
	// Create Employee class object
	var emp3 = new Employee("Ren","Pluto",2500);
	
```
Here each instance variable *emp1*, *emp2*, *emp3* has its own copy of the *increaseSalary* private method.
So, as a recommendation, don’t use private methods unless it’s necessary.

## Write a mul function which will produce the following outputs when invoked:

```js
	console.log(mul(2)(3)(4)); // output : 24 
	console.log(mul(4)(3)(4)); // output : 48
```
Below is the answer followed by an explanation to how it works:

```js
	function mul (x) {
	    return function (y) { // anonymous function 
	        return function (z) { // anonymous function 
	            return x * y * z; 
	        };
	    };
	}
```
Here the mul function accepts the first argument and returns an anonymous function, which takes the second parameter and returns another anonymous function that will take the third parameter and return the multiplication of the arguments that have been passed.
In JavaScript, a function defined inside another one has access to the outer function's variables. Therefore, a function is a first-class object that can be returned by other functions as well and be passed as an argument in another function.<br/><br/>
•	A function is an instance of the Object type.<br/><br/>
•	A function can have properties and has a link back to its constructor method.<br/><br/>
•	A function can be stored as a variable.<br/><br/>
•	A function can be pass as a parameter to another function.<br/><br/>
•	A function can be returned from another function.<br/><br/>
___

## What is a potential pitfall with using *typeof bar === "object"* to determine if bar is an object? How can this pitfall be avoided?
typeof null is object

```js
	(bar !== null) && (typeof bar === "object")
```
**What will the code below output to the console and why?**
<br/>
```js
	(function(){
	  var a = b = 3;
	})();
	 
	console.log("a defined? " + (typeof a !== 'undefined'));
	console.log("b defined? " + (typeof b !== 'undefined'));
```
b be defined outside of the scope of the enclosing function, try "use strict"; to reveal error.

```js
	a defined? false
	b defined? true
```

**What will the code below output to the console and why?**

```js
	var myObject = {
	    foo: "bar",
	    func: function() {
	        var self = this;
	        console.log("outer func:  this.foo = " + this.foo);
	        console.log("outer func:  self.foo = " + self.foo);
	        (function() {
	            console.log("inner func:  this.foo = " + this.foo);
	            console.log("inner func:  self.foo = " + self.foo);
	        }());
	    }
	};
	myObject.func();
```
'this' is inner function which foo never defined
```js
	outer func:  this.foo = bar
	outer func:  self.foo = bar
	inner func:  this.foo = undefined
	inner func:  self.foo = bar
```
## What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
Avoid conflict from other modules and libraries e.g.
```js
	// pass jQuery in as $
	(function($) { /* $ can be use */ } )(jQuery);
```
or with ready **#noConflict**
```js
	// release $ from other
	$.noConflict();
	// wait for document reay and accept argument as $ and use it
	jQuery(document).ready(function($){/* $ can be use */});
```
## What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

💡It's best practice to be more strict instead of failed silently.<br/><br/>
•	Makes debugging easier : Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.<br/><br/>
•	Prevents accidental globals : Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.<br/><br/>
•	Eliminates this coercion : Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing a this value of null or undefined throws an error.<br/><br/>
•	Disallows duplicate property names or parameter values : Strict mode throws an error when it detects a duplicate named property in an object (e.g., var object = {foo: "bar", foo: "baz"};) or a duplicate named argument for a function (e.g., function foo(val1, val2, val1){}), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.<br/><br/>
•	Makes eval() safer : There are some differences in the way eval() behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).<br/><br/>
•	Throws error on invalid usage of delete : The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.<br/><br/>

## Consider the two functions below. Will they both return the same thing? Why or why not?
```js
	function foo1()
	{
	  return {
	      bar: "hello"
	  };
	}
	 
	function foo2()
	{
	  return
	  {
	      bar: "hello"
	  };
	}
	 
	console.log("foo1 : " + foo1());
	console.log("foo2 : " + foo2());
```
💡It'll see as return; because **;** are optional
```js
	foo1 :[object Object]
	foo2 : undefined
```
## What is NaN? What is its type? How can you reliably test if a value is equal to NaN?

💡Stand for Not a Number but beware typeof NaN === "number" is true

```js
	isNaN(NaN);       // true
	isNaN(undefined); // true
	isNaN({});        // true
	 
	isNaN(true);      // false
	isNaN(null);      // false
	isNaN(37);        // false
	 
	// strings
	isNaN("37");      // false: "37" is converted to the number 37 which is not NaN
	isNaN("37.37");   // false: "37.37" is converted to the number 37.37 which is not NaN
	isNaN("");        // false: the empty string is converted to 0 which is not NaN
	isNaN(" ");       // false: a string with spaces is converted to 0 which is not NaN
	 
	// dates
	isNaN(new Date());                // false
	isNaN(new Date().toString());     // true
	 
	// This is a false positive and the reason why isNaN is not entirely reliable
	isNaN("blabla")   // true: "blabla" is converted to a number. 
	 
	// extra point for ES6
	Number.isNaN(NaN);
```
## What will the code below output? Explain your answer.

```js
	console.log(0.1 + 0.2);
	console.log(0.1 + 0.2 == 0.3);
```
💡Stand for Not a Number but beware typeof NaN === "number" is true

```js
	0.30000000000000004
	false
```
## Discuss possible ways to write a function isInteger(x) that determines if x is an integer.

**#pitfall #Number #Integer**

💡ES6 not provide **Number.isInteger()**

```js
	function isInteger(x) { return Math.round(x) === x; }
```

## In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

```js
	(function() {
	    console.log(1); 
	    setTimeout(function(){console.log(2)}, 1000); 
	    setTimeout(function(){console.log(3)}, 0); 
	    console.log(4);
	})();
```

**#pitfall #async**

💡Async will do thing after inline code.

```js
	1
	4
	3
	2
```
## Write a simple function (less than 80 characters) that returns a boolean indicating whether or not a string is a palindrome.

💡Check word == reversed_word

```js
	function isPalindrome(str) {
	    // trim non word and make it lower case
	    str = str.replace(/\W/g, '').toLowerCase();
	    // compare with reversed text
	    return (str == str.split('').reverse().join(''));
	}
	console.log(isPalindrome("level"));                   // logs 'true'
	console.log(isPalindrome("levels"));                  // logs 'false'
	console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'
```
## Write a sum method which will work properly when invoked using either syntax below.

```js
	console.log(sum(2,3));   // Outputs 5
	console.log(sum(2)(3));  // Outputs 5
```

**#algorithm #arguments #functional**


💡Use functional programming

```js
	function sum(x) {
	  if (arguments.length == 2) {
	    return arguments[0] + arguments[1];
	  } else {
	    return function(y) { return x + y; };
	  }
	}
```
***or***

```js
	function sum(x, y) {
	  if (y !== undefined) {
	    return x + y;
	  } else {
	    return function(y) { return x + y; };
	  }
	}
```
## Consider the following code snippet:

```js
	for (var i = 0; i < 5; i++) {
	  var btn = document.createElement('button');
	  btn.appendChild(document.createTextNode('Button ' + i));
	  btn.addEventListener('click', function(){ console.log(i); });
	  document.body.appendChild(btn);
	}
```

(a) What gets logged to the console when the user clicks on “Button 4” and why? <br/>
(b) Provide one or more alternate implementations that will work as expected.

**#closure #scope**

💡i is 5 forever, need input i to closure function.

```js
	...
	(function (i) {
	  btn.addEventListener('click', function() { console.log(i); });
	})(i);
	...
```
## What will the code below output to the console and why?

**#array #referrence**

```js
	var arr1 = "john".split('');
	var arr2 = arr1.reverse();
	var arr3 = "jones".split('');
	arr2.push(arr3);
	console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
	console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
```
💡Here's what happen. *silce(-1)* will pick 1 item backward which is *arr3*

```js
	var arr1 = "john".split('');    // arr1 = ["j","o","h","n"]
	var arr2 = arr1.reverse();      // arr2 = arr1 = ["n","h","o","j"]
	var arr3 = "jones".split('');   // arr3 = ["j","o","n","e","s"]
	arr2.push(arr3);                // arr2 = arr1 = ["n","h","o","j",[,"j","o","n","e","s"]]
```
*Output*

```js
	array 1: length=5 last=j,o,n,e,s
	array 2: length=5 last=j,o,n,e,s
```
## What will the code below output to the console and why ?

**#String #Number #operation**

```js
	console.log(1 +  "2" + "2");
	console.log(1 +  +"2" + "2");
	console.log(1 +  -"1" + "2");
	console.log(+"1" +  "1" + "2");
	console.log( "A" - "B" + "2");
	console.log( "A" - "B" + 2);

```
💡Rules : 1 + "2" = "12" and -"1" = -1 also last one will judge type

```js
	122
	32
	02
	112
	NaN2
	NaN
```
## The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

**#recursive #async**

```js
	var list = readHugeList();
	 
	var nextListItem = function() {
	    var item = list.pop();
	 
	    if (item) {
	        // process the list item...
	        nextListItem();
	    }
	};
```
💡Delay funcation call by *setTimeout*

```js
	var list = readHugeList();
	 
	var nextListItem = function() {
	    var item = list.pop();
	 
	    if (item) {
	        // process the list item...
	        setTimeout( nextListItem, 0);
	    }
	};
```
___

# OOP Theory
## What is Object Oriented Programming (OOP)? 
OOP focuses on the objects that developers want to manipulate rather than the logic required to manipulate them. This approach to programming is well-suited for programs that are large, complex and actively updated or maintained. 
<br/>
Object Oriented programming (OOP) is a programming paradigm that includes or relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes) which are used to create individual instances of objects. 

<br/>

## What is an OOPL?
The object-oriented paradigm is based on the classes and objects where objects are the instances of the classes and can be created in different ways. There are different object-oriented programming languages such as Javascript,C++, C#, PHP, Ruby, Java, Python, etc.

<br/>

**Object means a real-world entity such as a pen, chair, table, computer, watch, etc. Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies software development and maintenance by providing some concepts: **

<br/>

1. Object 

2. Class 

3. Inheritance 

4. Polymorphism 

5. Abstraction 

6. Encapsulation 

## What is an Object? 
Any entity that has state and behavior is known as an object. For example, a chair, pen, table, keyboard, bike, etc. It can be physical or logical.
<br/>
An Object can be defined as an instance of a class. An object contains an address and takes up some space in memory. Objects can communicate without knowing the details of each other's data or code. The only necessary thing is the type of message accepted and the type of response returned by the objects. 
<br/>
*Example: A dog is an object because it has states like color, name, breed, etc. as well as behaviors like wagging the tail, barking, eating, etc.*

## What is Class? 
CLASS are a blueprint or a set of instructions to build a specific type of object. It is a basic concept of Object-Oriented Programming which revolve around the real-life entities. Class in JavaScript determines how an object will behave and what the object will contain. 

In object-oriented programming, a class is a blueprint for creating objects (a particular data structure), providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods). 

![alt text](https://i.postimg.cc/mDD7Wkwr/Untitled.png)

<br/>

```diff
- The image above shows how a Car object can be the template for many other Car instances. In the image, there are three instances: polo, mini, and beetle. Here, we will make a new class called Car, that will structure a Car object to contain information about the car’s model, the color, how many passengers it can hold, its speed, etc. A class can define types of operations, or methods, that can be performed on a Car object. For example, the Car class might specify an accelerate method, which would update the speed attribute of the car object. 
```
## What is the Difference Between Object & Class? 

<br/>

A class is a blueprint or prototype that defines the variables and the methods (functions) common to all objects of a certain kind. 
An object is a specimen of a class. Software objects are often used to model real-world objects you find in everyday life. 

## Why We Use OOP? 
<br/>
OOP makes code organized, reusable, and easy to maintain; It follows the DRY method (Don’t Repeat Yourself). Benefits of OOP include security; OOP prevents unwanted access to data, or exposing proprietary code through encapsulation and abstraction - both are discussed further in the Principles of OOP. 

So how do programmers create Object Oriented programs? Well the short answer is by making classes, and creating objects from the classes. In OOP everything is an object. Classes form the blueprint for how data & behaviors are structured. 
 
Objects are created for specific instances of a class. As a programmer, you might create a dog class (blueprint) as a standard way to organize all the important information about dogs, and then instantiate an individual dog as an object created from the dog class - like your dog Fluffy. 
<br/>
**Building blocks of OOP**
<br/>
Assuming you’ve got a limited familiarity with JavaScript, the code building blocks to build an OOP program we’ll discuss are: 
```diff
- classes     objects      methods    attributes 
```
![alt text](https://i.postimg.cc/zvN7Z8V2/bp.png)

```js
	//Object of one individual dog 
	var name = { 
	name: "Vishal", 
	birthday: "9/05/1998", 
	age: function() { 
	return Date.now() - this.birthday; 
			}, 
	attendance: 0 
	} 

	//Object of second individual dog 
	var name = { 
	name: "Ajay", 
	birthday: "07/02/1997", 
	age: function() { 
		return Date.now() - this.birthday; 
			}, 
	attendance: 0 
	} 
```
