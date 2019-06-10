/*
  
  What is the difference between var and let?
Var has been in JS since the beginning.
Let was introduced in ES2015/ES6
Let has block scope.
Var has function scope.  Doesn't respect other block.  Will die at end of function not the block.
Var gets hoisted at the top of the function.  Let does not get hoisted.



  What is the difference between “==” and “===”
Both are comparison operators.
“==” compares only value
“===” compares value and type
Example
if('1' == 1)	true
if('1' === 1)	false b/c one is string and the other is number



  What is the difference between 'let' and 'const'
Let allows you to change the value or type.
Const is constant and won't let you change the value or type.



  What is the difference between Null and Undefined?
Both represent empty value.
Undefined means you have defined a variable but not have assigned a value to it.
Null means it's not defined or has a value.
typeof(undefined) => undefined
typeof(null) => object



  What is prototypal inheritance?
Every object has a property called prototype where you can add methods and properties to it.
When you create objects from these objects the newly created ones will inherit the properties of the parent.
How it works.
When you call on a method.  It first looks at its own properties to see if it's there.  If not, it goes up to its parent.

Let car = function(model) {
	this.model = model;
};

car.prototype.getModel = function(){
	return this.model;
}

let toyota = new car('toyota');
console.log(toyota.getModel());

let nissan = new car('nissan');
console.log(nissan.getModel());




  What is the difference between function declaration and function expression.

Function declaration
You have your function and function name

function funcD(){
	console.log('function declaration');
};

Function expression
You have an anonymous function that is saved into a variable.

Let funcE = function(){
	console.log('function expression');
};




What is promises and why do we use it?
An example
You make an async call and you have to wait for something to happen.
Once it comes back, you execute a callback function.
Within that callback function you might do another ajax call.
Which would repeat the process which becomes a mess of nested callback functions.
Hard to read and debug.
To simplify we use promises.

Doesn't do anything special but makes the code easier to read.




  What is setTimeout()?

setTimeout(function(){
	console.log('a');
}, 0);

console.log('b');
console.log('c');

So what's the order?
The answer is 'b', 'c', and then 'a'
Why?
Even though there is 0 timeout it doesn't execute right away.
Because this is asynchronous it has to wait for everything on the stack to execute first.




  What is closure and how do you use it?
When a function returns another function,
The returning function will hold it's environment.

Example

let obj = function(){
	let  i=0;

	return {
		setI(k){
			i=k;
},
	getI() {
		return i;
}
}
};

let x = obj();
	//when you execute this, it will return what's inside the object below

x.setI(2); // returns 2
console.log(x.getI());




BASIC DEFINITIONS
//Shallow Copy
	just copies the elements within

//Deep Copy
  copies the prototypes as well
  




      What is an IIFE and why might you use it?

	Immediately invoked function expression

	order in which files are loaded
	so if we have 2 global variables with the same name,
	the one that is in the file at the bottom gets created over the previous one
	both still exist, but the bottom file will print first

	so this pollutes the global window object
	might be overwriting, hard to predict the behavior of application

	anything you define within a function stays within that function

	so if we move the copy variable within the function of the last file then it won't print first 

	a simpler way to do this

	in order to immediately invoke a function 
	wrap parenthesis around the function so start before the f and end after the right curly brackets
	then type ();
	when Javascript runs by this, it will immediately invoke this function





      What are the different types in Javascript?

	We have 5 primitive types
	Boolean
	Number
	String
	Null
	Undefined
	//and 1 non primitive type
	Object

	we can use function typeof() in console to find out type
	so
	typeof(1)	returns		“number”

	typeof(null)	returns		“object”

  typeof({})	returns		“object”
  



      Does Javascript pass parameters by value or by reference?

	Passing primitive types such as strings, numbers, booleans are passed by value
	and objects are passed by reference
	
	if a variable is declared inside a function it has no effect on the value of what it was declared 	outside the function
	the reverse is true with an object
	when you change an object within a function, it also changes on the outside of the function
  can't change what it points to, only can change value
  



  What is 'use strict' and what does it do?

	the 'strict' mode allows you to debug errors more easily

	how to enable 'strict mode'
	in the console, type in
	“use strict”;
	it's a string b/c older browsers didn't support it, only new ones
	when it was loaded in to the browser the older ones would ignore it just as a string
	the newer ones would know that this is a new feature

	what does this mode do?
	Without strict mode
	drez = 1;	//creates a global variable; now it's in the window object
	why is that bad?
	
	var theVal = 0;
	later on in the app, we change the variable
	thVal = 1;	//mistake in spelling was made here but didn't notice
	if(theVal>0){
		console.log(“Hello!”)
	}
	//now b/c of this mistake, we could spend hours trying to find what's wrong

	if we use 'use strict' mode
	an error occurs b/c it won't let you declare a new variable w/o 'var' keyword

	another feature of 'use strict'
	stops you from using words that are keywords
	example
	//without 'use strict'
	var let = 1;	//no problem
	//with 'use strict' turned on
	var let = 1;	//shows an error b/c let is a keyword in ES6

	another feature of 'use strict'
	you can't delete functions, variables, or function arguments
	example
	var foo = 1;
	delete foo;
	//no problems, it will let you delete this variable
	another example
	function moo() {};
	delete moo
	//no problems, it will let you delete this function

	if we turn on 'use strict' mode
	we can't do either of those
	we can't delete arguments for functions either

	another use of 'use strict' mode
	can't use eval as a variable like in normal mode
	
	let's you execute arbitrary bits of code
	like 
	eval(“var a =1”);
	console.log(a);
	can cause problems b/c if you declare a as something else before and expect it to be the same 	going forward but you redeclare it with eval then it's re-declared
	
	so in 'use strict' mode 
  anything you define in eval() mode remains within that mode
  



  
     Javascript Syntax – The way in which a language is written

	API- Application Programming Interface
		Each language has its own

	An API is a collection of functions and properties as well

	We can have API's inside of API's
		Jquery is an API
		It has its own collection of functions and properties
		This is what is known as an Embedded API or Extension API or Extended API
		jQuery needs the native Javascript API to define its own API






*/