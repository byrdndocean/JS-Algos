/*


TRICKY JAVASCRIPT INTERVIEW QUESTIONS AND ANSWERS

Example 1

console.log(2 + '2'); //22

console.log(2 – '2'); //0

Example 2

let nums = [1, 2,  2, 3];
//only use single line to remove 2 from this array
// by using the spread operator
console.log([...new Set(nums)]);


Example 3

BEFORE
(this is showing var with console.log.  Change it to where both are not showing)

let func = function() {

	{
	let l = 'let';
	var v = 'var';
}

	console.log(v);
	console.log(l);

}

func();

AFTER
(we use IIFE (immediately invoked function expression))
let func = function() {

	{
	(function() {
		let l = 'let';
		var v = 'var';
	})();
	}
	console.log(v);
	console.log(l);
}
	func();
Example 4
What's the answers?

console.log(5 < 6 < 7); //true
	machine logic
	(true < 7) converts to (1<7); which is true

console.log(7 > 6 > 5); // false
	machine logic
	(true > 5); converts to (1>5): which is false
  
Example 5
BEFORE
let a = () => arguments;

console.log(a('hi'));
we get 'hi'

convert to arrow function with it still saying 'hi'
//arguments does not bind to arrow function
AFTER
// use the spread operator
let a = (...n) => { return n} ;
console.log(a('hi'));


EXAMPLE 6

BEFORE

let x = function(){
	return
	{
	message: 'hi'
	}
}
console.log(x());
we get error
why?//because we have a line break after return, JS assumes we want a ';' after return
how do we fix?

Let x = function(){
	return{
	message: 'hi'
	}
	}
console.log(x());


EXAMPLE 7

//seal method
//doesn't allow you to add properties but you can modify them
// freeze method
//you can't add or modify

let profile = {
	name: 'techsith'
};

Object.seal(profile);

profile.name = 'interviewnest';
profile.age = '3'

console.log(profile);
//changes the profile name
//doesn't change age b/c age doesn't exist 


EXAMPLE 8

//we want to modify name, add age but not be able to modify it
BEFORE
let profile = {
	name: 'techsith',
	};

console.log(profile);

AFTER

Object.defineProperty( profile, 'age', {
	value: 3,
	writable: :false
})
	
profile.name = 'interviewnest';
profile.age = 4;

console.log(profile);

//we get
	name: 'interviewnest';
	age: 3;
//so we were able to add 3, and when a request was made to change age to 4, it was denied


EXAMPLE 8

//What is the answer?

console.log(Math.max());	// -infinity

//why?

Console.log(Math.max(1,2,3)); //3 b/c it's the larger

-infinity is the only number available
picks the lowest possible number which is -infinity


///////////////////////////////////////////////
************************************
***********************************
////////////////////////////////////////////



'THIS' KEYWORD
'this' means whichever object you are in

this.table = 'window table';
console.log(window.table);
//we get window table

another example

this.table = 'window table';

this.garage = {
	table: 'garage table'
};

let johnsRoom = {
	table: 'johns table'
};

console.log(this.johnsRoom.table);
//doesn't work b/c johnsRoom is private

console.log(johnsRoom.table);


ANOTHER EXAMPLE

'this' inside a method

objects can have methods

this.garage = {
	table: 'garage table',
	cleanTable() {
		console.log(`cleaning ${this.table}`)
	}};

let johnsRoom = {
	table: 'johns table',
	cleanTable() {
		console.log(`cleaning ${this.table}`)
	}};

johnsRoom.cleanTable();
this.garage.cleanTable();

//what if we want to call the first one that's inside the global window

this.table = 'window table';

const cleanTable = function(){
	console.log(`cleaning ${this.table}`);
};

//doesn't know what 'this' is
//we have call function
//take a function and execute this as if it's a method of this
cleanTable.call(this);

ANOTHER EXAMPLE

this.table = 'window table';

const cleanTable = function(){
	console.log(`cleaning ${this.table} using ${soap}`);
};

this.garage = {
	table: 'garage table'
};

let johnsRoom = {
	table: 'johns table'
};

cleanTable.call(this, 'some soap');
cleanTable.call(this.garage, 'some soap');
cleanTable.call(johnsRoom, 'some soap');

//we get
//cleaning window table using some soap
//cleaning garage table using some soap
//cleaning johns table using some soap

//this is how you use someone else's method on an object

ANOTHER EXAMPLE
'this' inside an inner function

~12:00
techsith
This keyword

use arrow function because they take 'this' from the outer scope

BEFORE
this.table = 'window table';

const cleanTable = function(soap){

	const innerFucntion = function(_soap) {
	  console.log(`cleaning ${this.table} using ${_soap}`);
	}
	innerFunction(soap);
	};

AFTER
this.table = 'window table';

const cleanTable = function(soap){

	const innerFucntion = (_soap) => {
	  console.log(`cleaning ${this.table} using ${_soap}`);
	}
	innerFunction(soap);
	};


STOPPED AT 15:50
using a constructor

8551.06 – 100 = 8451.06
8451.06 / 8551.06 = 0.98830554
1 – 0.98830554 = 0.01169446
0.01169446 * 23Million



///////////////////////////////////////////////
************************************
***********************************
////////////////////////////////////////////


10 JAVASCRIPT INTERVIEW QUESTIONS & ANSWERS

WHAT IS SCOPE?

A variable that is accessible everywhere has global scope, and a variable that can only be accessed in a particular place has local scope.


WHAT IS HOISTING?

Hoisting is JavaScript's default behavior of moving variable and function declarations to the top.

Console.log(x); // Error

console.log(x); // undefined
var x;

why?

Machine interprets it like
var x;
console.log(x); // undefined


Calling functions are hoisted.
Function expressions are not hoisted.


WHAT IS A CLOSURE?

A closure is an inner function that has access to the outer, or enclosing function's variables.

Closure helps keep your code concise and clean.
We don't need to redefine a new function for every new name that we want to say hello to.



WHAT IS FUNCTIONAL PROGRAMMING?

Functional programming involves using pure functions that avoid shared state mutating data, and side-effects.  It is declarative, rather than imperative.

For example, making a copy of an object and using it as an argument.



WHAT IS THE DIFFERENCE BETWEEN SYNCHRONOUS AND ASYNCHRONOUS CODE?

Synchronous code is blocking or must complete before anything else can happen.

Asynchronous code is not blocking which means that things can move on while we wait for something to finish.

Asynchronous JavaScript utilizes callbacks to do this.

Asynchronous code is faster and allows for a better user experience b/c we don't need to wait for things to finish before we can move on, instead we can just move on and when things finish then we can do what we need.

Synchronous
console.log('One');
console.log('Two');
console.log('Three');

Asynchronous
console.log('One');
setTimeout(function(){
    console.log('Two');
}, 1000);
console.log('Three');
//We get 'One' 'Three' 'Two'



HOW CAN YOU DETERMINE IF SOMETHING IS AN ARRAY?

Use the constructor property to solve this problem.

[].constructor; // Array
[].constructor === Array; // true


WHAT IS A HIGHER ORDER FUNCTION?

A higher order function is a function that can take another function as an argument or that returns a function as a result.

A closure is kind of a higher order function.

Var forEach = function(array, iterator) {
	for (var I =0; I < array.length; i++) {
	    iterator(array[i], I);
}}
	forEach('Michael', 'Tim'], function(arrayItem, index) {
	    console.log(arrayItem, index);});

WHAT IS THE DIFFERENCE BETWEEN AN ARRAY AND AN ARRAY-LIKE OBJECT?

An array-like object does not have the standard array methods but an array can be created from it with array dot from.


WHAT IS TYPE COERCION?

JavaScript sometimes allows something of a particular type to be coerced into another type.

Console.log('Hello ' + 8); // 'Hello 8')
//the number 8 is coerced into a string so there's no error thrown
console.log('8' == 8); // true
//the double equal signs allows the 2 8's to be coerced into being the same type


WHAT IS THE DIFFERENCE BETWEEN TWO-WAY DATA BINDING AND ONE-WAY DATA FLOW?

Two-way data binding – UI and model data change together.

One-way data flow – Single source of truth, changes to that single source of truth can only flow in one direction.



///////////////////////////////////////////////
************************************
***********************************
////////////////////////////////////////////



DIFFERENCE BETWEEN CALL APPLY AND BIND
(TECHSITH)


call, apply and bind are very useful.

They let you borrow functionalities from other objects.

EXAMPLE

let add = function(c){
    console.log(this.a + this.b + c);
};

let obj = {
    a: 1,
    b: 2
};

add.call(obj, 3);
//We get 6

ANOTHER EXAMPLE

Every object in JavaScript has prototype and within the prototype you would find a bunch of methods that you can use only for that object.

Inside there is an argument object available which holds all the parameter passed.
It's not an array, it's an array-like object.
So with the call method we can pass the arguments object.
This converts arguments into an actual array.

Let argsToArray = function(){
	[].slice.call(arguments);
};

argsToArray(1,2,3)












Javascript Objects

an object in javascript contains noun and adjective pairs
together they are called properties
for example
{ width: 25,
height: 27,
color: “red”,
weight: 5
	} 
	key and value pairs-  the nouns are the keys and the adjectives are the values
	together they are called properties


	
	within objects there are verbs which are functions
	{ width: 25,
height: 27,
color: “red”,
weight: 5,
eat: function() {“Eat the apple.”;},
throw: function() {“Throw the apple away.”;}
	} 
	when there is a function within an object, it is called a Method

	objects are important because they allow you to group certain information about your program 	together,  if not, then information would be scattered everywhere

	hierarchy of objects, let's say you have a laptop.  The basics of your laptop is the parent object, 	so you have the height, width, color, keyboard, touchpad and then you'll have within that more 	objects like the camera and the specs on that and the screen and the things that make that up and 	so on

	Encapsulation is grouping data together, like a pill that has various chemicals contained inside


 Javascript Syntax – The way in which a language is written

	API- Application Programming Interface
		Each language has its own

	An API is a collection of functions and properties as well

	We can have API's inside of API's
		Jquery is an API
		It has its own collection of functions and properties
		This is what is known as an Embedded API or Extension API or Extended API
		jQuery needs the native Javascript API to define its own API


Primitive Data
	
	just means primitive data
	can not create an application without primitive data

	first we have a string
	to use quote within a string
	“he said \”hello\” thats it”
	prints out
	“he said “hello” thats it”
	or
	'hello world “yup” '
	prints out 
	“hello world “yep” “

	
	second are number types
	whole integers, not fractional nor are they divided into sections
	like 100, 200, 1
	we have floating point numbers or floats
	1.1, 100.256

	
	third we have booleans
	it's either true or false
	like a light switch

	we have null or undefined
	null doesn't have anything
	undefined means you have a variable or value it means there is nothing in there

	NaN
	not a number



Variables Constants & Assignment

	var
	creating a box
	need to identify what's inside (can be called anything but should be related)
	var name = “Lawrence”;
	now we have
	name	“Lawrence”
	we can change
	name = “Turton”;
	now we have
	name	“Turton”
	
	can also create blank variables
	var blank;
	returns undefined
	until you change the value
	blank = “new value”;
	variables and constants are ways of fetching memory

	in some languages if you assign a string to a variable you can't change
	but Javascript is a loose data type language so you can change that variable to a different data 	type
	so a string can be changed to a number

	
	constants
	these do not change
	constant does not change within the life cycle of that function
	can not create constant without assigning a value to it
	const lastname = “turton”;
	is never going to change within the life cycle of that program
	lastname = “Lawrence”
	this does not work, we need a variable instead


	symbols table
	a giant warehouse that contains all of these boxes
	we can go in and find these boxes



Arithmetic Operator's & BODMAS

	w/o operators you wouldn't have programs
	what humans read, the computer can't so it needs something to translate
	JIT compiler translates this so that the computer can read and executes our commands
	
	operator is a predefined function for the language
	when it reaches the operator it will run the function
	functions are tasks that you perform
	let's say create a box and give it a name, and assign it a new value
	you can have many operators in one statement
	look up mdn javascript operator precedence
	this or that operator will be executed first
	like order of operations
	can't do from left to right
	but it follows operator precedence and we do basic algebra to figure out correct answer
	BODMAS
	B = Brackets take the highest precedence ( )
	O = power or to the power of....
	DM = division and multiplication
	AS = addition and subtraction

	so for example
	Math.pow(2,4) / 2+1-5+(2*12);
	returns 28
	.pow is to the power of
	so .pow(2,4) is same thing as 2*2*2*2 which equals 16
	then we do 2*12 which is 24
	then we do division so 16/2 which is 8
	then we do 8 +1 which is 9
	then 9-5 which is 4
	then 4 + 24 which is 28

	or can call this PEDMAS
	parenthesis
	exponent
	division/multiplication
	addition/subtraction

	we also have % which is the modulus operator	
	gives you the remainder
	so 9%5 gives us 4
	way to find out odd or even
	9%2 gives us 1 which means it's odd
	10%2 gives us 0 which means it's even


	
Assignment Operators

	var number = 20;
	now we have 
	number  that returns 20
	if we want to add to this
	number += 30;
	now we have 50
	now if we do
	number -= 30
	now we have 20
	number *= 2;
	now we have 40
	number /= 4;
	now we have 10
	number %= 4;
	now we have 2
	number **= 4;		(2 to the power of 4)
	now we have 16


	with strings
	“Lawrence” + “Turton”
	gives us
	“Lawrence Turton”
	if we do
	“Lawrence” + 10;
	gives us
	“Lawrence10”

	Polymorphism
		An organism or inorganic object or material which takes various forms
		if we go to make some tea, our routine can change or adapt like add more sugar

	takes the number and turns it into a string
	+sign will combine both together

	we can do
	var name = “Lawrence”
	we have 
	name “Lawrence”
	then
	name += “ Turton”;
	gives us
	“Lawrence Turton”
	(need to include space before Turton within the quotes)



Code Editors and Debugging

	in the console you can do string, numbers and booleans


Functions or Subroutines


	Functions or Subroutines
	They're tasks defined by a set of instructions that can be run at a certain point in time.
	
	Execution context
	A list of instructions to complete the routine

	Function makeCoffee (sugar, milk)
	sugar and milk are parameters
	parameters are variables that can have values assigned to them when we execute our 	instructions
	can have as many parameters as you'd like
	what's inside the curly brackets, that just defines the instructions, we then need execute it

	Function makeCoffee (sugar, milk)
	{
		var instructions = “Boil water,”;
		instructions += “pour into cup,”;
		instructions += “add coffee granules,”;
		instructions += “add” + sugar + “spoons of sugar,”;
		instructions += “add” + milk + “% milk,”;
		return instructions;
}

	Function makeCoffee (2, 20)
	these are called arguments
	arguments are values

	Function makeCoffee (sugar, milk)
	these are called parameters
	empty boxes or variables waiting to store the data
	makes the function adaptable 
	we can pass arguments/values inside the parameters to make the function adaptable

	after function runs, the arguments passed in are thrown out

	parameters are variables or empty boxes waiting for information to be passed in through 	arguments

	concatenation means to combine together

	Function makeCoffee (sugar, milk)
	{
		var instructions = “Boil water,”;
		instructions += “pour into cup,”;
		instructions += “add coffee granules,”;
		instructions += “add” + sugar + “spoons of sugar,”;
		instructions += “add” + milk + “% milk,”;
		return instructions;
	}
	console.log(makeCoffee(2,20));

	what's inside the curly brackets, that just defines the instructions, we then need execute it
	we can do this with console.log
	console.log(makeCoffee(2,20));







Objects & Arrays

	arrays are list objects
	when do we use an Array?
	An array is an object but it's a special type of object
	
	objects = obvious
	when you look at something like a car and it's obvious that it's a car
	if you have a car, you need the nouns and adjectives to describe the car
	key and value pair are called properties
	we have subroutines or functions inside the object which are called Methods
	Methods are functions within an object
	
	{
		color: “red”,
		speed: 165,
		maker: “Volvo”,
		drive: function(){...},
		stop: function() {...}
	}

	Arrays are list objects
	think of a shopping list
	we define an array with brackets [ ]
	each element is assigned a number
	
	[
		0: “Apple”,
		1: “Orange”,
		2: “Pear”
	] 

	whenever you modify an array, these key numbers are rearranged
	you can take or add elements

	we can create an empty object

	var car = {};

	an array looks like this

	var shoppingList = [
		“Apple”,
		“Orange”,
		“Pear”
	];



Embedding Objects & Arrays

	we can put an object within an object
	we can put object within an arrays and vice versa

	var car = {
		make: “volvo”,
		speed: 160,
		engine: {
			size: 2.0,
			make: “bmw”,
			fuel: “petrol”,
			pistons: [ { maker: “BMW”}, { maker: “BMW”}]
		},
		drive: function() {return “drive”;}
	};

	an array can contain a string, number, another array, an object

	var array = [
			“string”,
			100,
			[“embed”, 200],
			{car: “ford”},
			function(){return “drive”;}	
	];

	since arrays are index based when we have a method, it doesn't need a key value in front of 	function



Member Access

	each element within an object or array is called a member

	for example in the car object
	make, speed, engine, drive are members
	to pull this out we write

	car.make;
	this pulls out “volvo”

	car.speed
	160

	car.engine.fuel
	“petrol”

	now what about methods?
	car.drive();
	returns string
	“drive”
	
	car.drive;
	returns the function (method contained within this object)
	function() {return “drive”;}

	car.engine.pistons;
	returns
	the array

	in order to pinpoint to an index
	if we write
	car.engine.pistons.0;
	it doesn't work because it treats the 0 as a number instead of index value
	
	in order to pull out value in an array
	called computed member access


Computed Member Access

	car.engine.pistons[0];
	returns
	Object {maker: “BMW”}

	in order to pull out string “BMW”
	we write
	car.engine.pistons[0].maker;
	returns
	“BMW”


	with the var array example above
	array[0]
	returns
	“string”	

	what about function?
	how do we access parameter within the function within this array?
	Array[4];
	returns the function

	we type in 
	array[4]();
	returns
	“drive”
	
	we can also use math to access what's inside an array
	and variables
	var a = 10;
	using array example  from above
	array[ a – 5 – 2 ];
	returns
	Object {car: “ford”}
	
	same thing as writing
	array[3];
	returns
	Object {car: “ford”}

	from Object example above
	car.make;
	returns
	“volvo”

	can also write
	car[“make”];
	“volvo”


	from Object example above
	car[“engine”];
	returns the Object {size:2, make: “bmw”, fuel: “petrol”, pistons: Array[2]}

	if we type car[“engine”][“pistons”];
	returns
	[Object, Object]

	if we type
	car[“engine”][“pistons”][1];
	returns
	Object {maker: “BMW2”}

	if we type
	car[“engine”][“pistons”][1][“maker”];
	returns
	“BMW2”

	if we type
	car[“drive”]();
	returns
	“drive”



Member Creation, Assignment & Deletion

	lets create new symbols within our object and assign new objects

	to change “volvo” in car object example above
	we write
	car.make = “ford”;
	and now instead of volvo, it's ford

	there are other assignment operators we can use
	lets add to “ford”
	we write
	car.make += 200
	returns “ford200”
	
	in example object above we have speed: 160
	in order to change that with math
	we write
	car[“speed”] *= 2;
	returns 320

	in example above we have engine object inside of car object
	to replace engine object
	we write
	car.engine = { newengine: “new”};
	returns
	gets rid of what was inside of engine and now it just has
	newengine: “new” inside of engine object

	we have drive that is a function inside of car object
	in order to replace we write
	car.drive = “drive” (can be called whatever)
	now drive is just drive: “drive”; 
	which is just a string now, instead of a function

	in order to create a new key
	in our var car object there is no model key
	so lets add it to the object
	car.model = “v60”;
	now we have car object with new key of model
	so, make, model, speed, ….

	we can create new methods as well
	we write
	car.stop = function(){ return “stop”;};
	now it's added to our car object



	in order to create a function within our engine object which is inside our car object
	we write
	car.engine.stop = function(){return “stop engine”;};
	now we have a new function within our engine object

	how to remove
	we write
	delete key.value;
	so car.speed;

	delete method
	car.stop;


Array Modification
	
		var array = [
			“string”,
			100,
			[“embed”, 200],
			{car: “ford”},
			function(){return “drive”;}	
	];


	to target what's inside
	we write
	array[0];
	returns
	“string”

	to change what's inside
	we write
	array[0] = “new string”;
	returns
	“new string”

	to add to
	we write
	array[0] += “ concat”;
	returns
	“string concat”

	we need to be careful when using the bracket syntax because an array is treated like an object
	
	



	to add another index
	array[5] = “new string”;
	returns
	“new string”
	now instead of index count being from 0 to 4
	it's now 0 to 5
	length is now 6

	be careful

	if we add new index w/o them being there, the indexes in between will be null/undefined
	so if we write
	array[20] = 2020;
	everything in between what is defined and new array index is undefined/null

	when we create an array
	it attaches an object to it called prototype
	arrays have pre built methods inside

	array.shift();
	deletes first element within the array
	so it gets rid of “string”

	array.pop();
	takes away last element
	so it gets rid of “new string” which was the last one we added just a short while ago

	array.unshift();
	within the parenthesis we pass in arguments to add to the array in front not after
	so array.unshift(“string”, 20, 20.22, function() {}, {}, [] );
	so now the length is 10
	those are the different types we can add to an array which is pretty much everything

	array.push();
	add things to the end of an array
	same as above except adds after not before
	pass in what you want to add as arguments within push
	just like above with unshift

	if we want to add things in between
	we use the splice method
	array.splice();
	first argument is where we want to begin
	second argument is how many we want to delete
	so if we have array.splice(2, 2) (with example array above)
	it takes out these 2 lines
			[“embed”, 200],
			{car: “ford”},

	if we want to add in elements
	we still use the splice method
	array.splice();
	first argument is where we start
	second argument is going to be 0
	third and after is what we want to add
	new values added in are separated by commas

	array.splice(2, 2, “world2000”)
	starts at 2 and takes away 2	(takes away [“embed”, 200],{car: “ford”})
	adds in “world2000” at 2 index position



Callable Objects

	function name()
	{
		var fullname = “Lawrence Turton”;

		return fullname;
	}


	we can call to a function
	write
	name
	returns the function

	we can write
	name();
	returns
	“Lawrence Turton”

	we can embed object within another object
	var obj = {embedded: {} };

	example
	function name()
	{
		var fullname = “Lawrence Turton”;

		function concat(name)
	{
		return “MR.” + name;
	}

		return concat(fullname);
	}
	if we type name();
	it returns
	“MR.Lawrence Turton”



	another example (using an object with a function)

	function name(fullname)
	{
		return fullname.firstname + fullname.lastname;
	}

	console.log(
	name( { firstname: “Lawrence”, lastname: “Turton”} );
	);

	returns
	LawrenceTurton


	another example
	a function that is passed in as an argument does not need a name
	it will be give a name when it's passed in to the function above it





Memory Hoisting

	a feature of Javascript
	Hoist means to lift up like crane
	memory means symbol names which refer to things like instructions
	look up memory hoisting again
	from the video looks like the order in which your variables and functions need to be written in 	order for there not to be errors or undefined popping up within the console










Scope & Closures

	scope = access
	the ways in which you access objects within other objects
	this is what scopes are
	they have their own access level
	some have more limited access depending on where they are
	
	so let's say we have

	var engine = {
		maker: “Ford”,
		headGasket: {
			pots: [
				“piston1”,
				“piston2”
			]
		}
	}

	in order to get to “piston1”
	we need to access it in a certain way
	so we would write
	engine.headGasket.pots[0]
	now it returns
	“piston1”


	another example
	function runExpression()
	{
		var a = 10;

		function add()
		{
			var b = 90;

			return a + b;
		}
		
		return add();
	}

	scopes and closures re-watch this video.  Video explains it better than taking down notes

	garbage collection is a big part of saving the user's RAM space and writing efficient code



Inferred Globals & Scope

	window object is the highest level object
	global means the variables can be accessed anywhere

	Infer – verb – to deduce or conclude (something) from evidence and reasoning rather than from explicit statements
	In Javascript we write statements
	It's trying to find where the variable is
	starts from within and searches outward until it finds variable somewhere
	last spot is global scope

	Easy to understand but it's a video meant for watching not taking notes
	so make sure to watch again
	

This Context 

	the 'this' word is a context based word
	it has reference
	by default it's the window object and it can change

	functions or callable objects allow us to change the context of 'this'
	it goes outside of current object and goes up/out by one
	so

	var object = {
		prop: stick,
		method: function(){return this;}
	};

	if we type in
	object.method();
	it returns
	object = {whatever is inside}

	same thing for an array
	
	var array = [
		stick,
		function(){return this;}
	];

	type in
	array[1]();
	it returns
	arrary [whatever is inside]

	for functions
	
	function global()
	{
		return this;
	}

	global.call(object);

	type in global();
	returns
	the window object b/c it goes outside and steps up/out by one
	so in this case, by going out by one we have entered the global space
	that's why it returns the window object

	invoking functions
	one way is global();

	another way
	global.call(object);
	call is a method

	re-watch this video again
	didn't understand everything


Constructors

	to be able to create an object when we need to
	
	capitalize the first letter of constructor function that way we know it's a constructor and not just 	a regular function 

	so
	we want to be able to create different objects on the fly
	function Apple(x, y, color, score)
	{
		this.x = x;
		this.y = y;
		this.color = color;
		this.score = score;
	}

	with constructor functions you use the 'new' keyword and then you invoke the constructor 	
	function
	
	new Apple(10, 20, “red”, 200);

	need to assign a variable to it in order to call upon it later
	so now,
	var apple1 = new Apple(10, 20, “red”, 200);

	can have more than one
	even though they can come from the same constructor function, they can be a little different
	
	var apple1 = new Apple(10, 20, “red”, 200);
	var apple2 = new Apple(10, 200, “green”, 50);

	we would type out var name in the console
	so
	apple2
	will print out object


Prototypes

	shared objects
	objects that have properties and methods that can be accessed by an array of different objects

	lets say we have a constructor that generates different apples each time
	so
	function Apple(color, weight) {…}

	Apple1{color: “red”, weight: 22, eat(), throw()};
	Apple2{color: “green”, weight: 12, eat(), throw()};
	Apple3{color: “purple”, weight: 55, eat(), throw()};


	instead of having 2 methods within  each object
	in order to save space, we write a prototype
	so now we have
	
	Apple1{color: “red”, weight: 22};
	Apple2{color: “green”, weight: 12};
	Apple3{color: “purple”, weight: 55};
	Apple.prototype = {
		eat(),
		throw()
	}

	things that are unique are on the instance level which is within Apple1,Apple2,Apple3

	things that are not unique are within the prototype

	we do this to take up less memory
	think of prototypes as shareable objects like verbs
	eat and throw are not unique but the color and size of the apple is

Constructors With Prototype

	now we have

	function Apple(color, weight)
	{
		this.color = color;
		this.weight = weight;
	}

	//so now, let's include prototype within this

	Apple.prototype = {
		eat : function(){return “eat the apple”;},
		throw : function(){return “throw the apple”;}
	};

	var apple1 = new Apple(“red”, 99);
	var apple2 = new Apple(“green”, 109);
	var apple3 = new Apple(“yellow”, 299);

	//goes more into 'this' keyword
	//re-watch video again


Comparison Operators

	allows us to ask program to think
	
	== (compares what is to left  and right of it)
	can use strings
	it is case sensitive when it comes to strings

	never use NaN with comparison operators

	strings take precedence
	so
	
	10 + “10” = “1010”

	can't turn string into a text 

	=== (checks for value and data types)

	!= (is not equal)

	!== (check for value and data types)


If Statements

	var carsLeft = 0,
	      carsRight = 0,
	      greenMan = “yes”;

	if(greenMan === “yes”)
	{
		console.log(“cross the road”);
	}
		//sometimes you want to ask a series of conditions
	else if (carsLeft === 0 && carsRight = 0)
	{
		console.log(“All clear! Cross the road”);
	}
		//if all else fails
	else
	{
		console.log(“Stay where you are!”);
	}

	(covers more in video)

For & For In Loop's	

	loops are used to take care of repetitive task

	var classRegister = [“Lawrence”, “John”, “Jeff”];

	console.log(classRegister[0]);
	console.log(classRegister[0]);
	console.log(classRegister[0]);

	//doing it this way is repetitive and takes up too much time
	//as well as, the information inside the Array can change

	so we use a loop

	if(){}	//if you want to check something once
	
	for(){}		//if you want to check something multiple times

	





	so now we have

	var classRegister = [“Lawrence”, “John”, “Jeff”];

	for(var i=0; i<classRegister.length; i++) 
	{
		console.log(classRegister[i]);
	}
		//this prints out “Lawrence”, “John”, “Jeff”

		//now in order to reverse this list/ we write this instead

	for(var i=classRegister.length – 1; i>=0; i--)
	{
		console.log(classRegister[i]);
	}

		//this prints out list in reverse

		//a quicker way to write the first one is like this

	for(var index = 0 in classRegister)
	{
		console.log(classRegister[index])
	}

	//var index = 0 //will be automatically increased
	//in // increment for the classRegister and take a look at the indexes in the classRegister
	//this is the for In loop

	for loops are very fast

	
ES6

	var symbolName = “value reference in memory”;

	let letSymbol = “scoped value”;

	const symName = “constant value in memory”;


	why do we need let
	let has more respect for scope
	it also allows you to rename

	const does not allow you to rename value

	
	let's take a look at let

	let symbol is defined what is inside
	const also is only defined in which scope it is inside

	var symbol doesn't respect scope

	more of a video that you watch
	so re-watch the video dude

	var only respect the scope of a function, not a loop


Understanding the Document Object Model

	we have the document object
	tells us where the url is
	we have childNodes
	tells us length like head, text, body
	and we have childNodes of those sections
	like header 1
	and so on
	but this isn't a good way to access the DOM

	now lets find a good way to access the DOM


Targeting DOM Element's

	#document is a global variable
	all sorts of properties and methods
	
	there are different ways to target
	getElementById
	getElementsByClassName
	getElementsByName
	getElementsByTagName
	getElementsByTagNameNS		(NS = Name Space)
	getElementById('img)


document.getElementsByTagName('p');
	//returns an array with multiple objects
	example
	[p,p,p]



okay but sometimes you want to target something specifically

document.getElementById('hello');
	//returns
	example
	<p id= “hello”>hello world</p>


document.getElementsByClassName('pClass');
	[p.pClass, h1.pClass]



document.querySelectorAll('#hello');
	[p#hello]

document.querySelectorAll('.pClass')
	[p.pClass, h1.pClass]

	//can combine as well

document.querySelectorAll('#hello, p.Class');

	

	//so lets say we have a span and a data-content(inside a p element)

	html
	<p data-content= “123”>345</p>
	<h1 class = “pClass”>Javascript Essentials<span>Hello</span></h1>

document.querySelectorAll('p[data-content='123'], body > h1.pClass > span');

	// > means direct child/ must be a direct child or it won't work



Changing Element's Content's

	we need to consider where our Javascript is placed
	place it at the bottom

	lets say we have
	document.getElementById('hello');

	if we want to change the text within the HTML
	we use .innerText
	so
	document.getElementById('hello').innerText = “new world”;
	now the text in the html doesn't say 'hello world'
	it says 'new world'

	we can also use +=
	so now a continuation of before
	document.getElementById('hello').innerText += “order”;
	gives us
	“new worldorder”

	but this way is not efficient
	we are going back over ourselves again b/c we have 2 document searches
	we can give this a symbol name so we can access it easily
	so

	var pHello = document.getElementById('hello');

	pHello.innerText = “new world”;

	pHello.innerText += “ order”;
	
	
	innerText = just for the text that is presented to the user
	
	innerHTML = allows us to add html

	so we can write

	pHello.innerHTML += “ order <span>hello world</span>”;

	//prints out 'new world order hello world' to user

	//lets say we want to modify the outerHTML

	pHello.outerHTML = '<h2 id = “hello”>new world order <span>hello world</span></h2>';

	//now it looks bold because of h2 element


	//if we want to select the span

	var spanH1 = document.querySelectorAll('h1 span')[0];
		//returns an array which is span, because it's indexed at 0 not 1

	spanH1.innerHTML = “new text here!!”;

	//or if we didn't put the [0] alongside the document selector, we put it with the spanH1
	spanH1[0].innerHTML = “new text here!!”;

	
Changing Element Style's

	lets say we have
	
	var el = document.getElementById('style');

	el.style
	
	//in console this list all the properties in css

	lets say we want to change something
	with example above we type

	el.style.background = “blue”;
	el.style.color = “white”;
	el.style.width = “200px”;	//numbers need to be in quotes

	//a quicker way to do this is; above example makes the page render slower
	
	el.style.cssText = “background:blue; color: white; width:200px”;

	//if we want to add on to, we type

	el.style.cssText += “height:200px”;

	//so lets say we want to access the predefined styles

	getComputedStyle( el )

	//do a console.log if you want to see

	//do not put !important inline css; put it in the css file


Event Handlers

	when the user does something, like click a button
	this has an event listener
	this runs a subroutine, (set of events)

	lets look at form fields
	we have a form with name values
	document.getElementsByName('...');
	choose the name that's in the html file in the form
	console.log it and it shows the on symbol names like onclick, onmouseover

	lets do this in html first

	<select name= “cars” onclick=”console.log('you clicked me')”;
	//this is an inline event, but this is really bad practice
	//instead we should do it in js file

	lets say we have

	var select = document.getElementByName('cars')[0];

	select.onclick = function(event){
		console.log(event);
	};

	//callback function is a function that happens on an 'on' event

	select.addEventListener( 'click', function(event)	//don't put onclick just put click
	{
		console.log( 'clicked by add event listener');
	});

	//if we want to remove an event

	select.removeEventListener( 'click', symbolName);

	

	//so for example to remove an event

	function ClickCallback( event) {
		console.log( 'clicked by add event listener' );
	}

	select.addEventListener( 'click', ClickCallback );

	select.removeEventListener( 'click', ClickCallback );

	//re-watch last minute of video again, goes over this process again


Create & appendChild & insertBefore method's
	re-watch b/c it's easier to watch than to write down

	var element = document.createElement('div');

	element.style.cssText = “width:200px; height:200px; background: blue;”;

	element.onclick = function(){ alert('hello');};

	document.body.appendChild( element );
	//when we do this, it appends the element at the bottom of the body before the closing tag
	//how to place in a specific place

	so we have
	in our html we have

	<body>

		<div id= “yellow” style= “background:yellow; width: 200px; height: 20px;”></div>

		<div id= “green”; width:200px; height:20px;”></div>

	</body>

	//so we want to target the first div element and insert before

	//so now adding on to our javascript file

	var element = document.createElement('div');

	element.style.cssText = “width:200px; height:200px; background: blue;”;

	//element.onclick = function(){ alert('hello');};

	//with the last line above us commented out lets do the insert before method

	var target = document.getElementById( 'yellow' );

	document.body.insertBefore( element, target);

	//this places it above our yellow div id in our html file







///////////////////////////////////////////////
************************************
***********************************
////////////////////////////////////////////







Advanced Javascript

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
	asim = 1;	//creates a global variable; now it's in the window object
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
	can cause promblems b/c if you declare a as something else before and expect it to be the same 	going forward but you redeclare it with eval then it's re-declared
	
	so in 'use strict' mode 
	anything you define in eval() mode remains within that mode


Does Javascript pass parameters by value or by reference?

	Passing primitive types such as strings, numbers, booleans are passed by value
	and objects are passed by reference
	
	if a variable is declared inside a function it has no effect on the value of what it was declared 	outside the function
	the reverse is true with an object
	when you change an object within a function, it also changes on the outside of the function
	can't change what it points to, only can change value


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
	In a static language like Java
	we write
	String a = 'moo';
	creates variable called a, this variable holds strings and only strings
	what type each variable will hold
	can't do a = 1; later on

	in Javascript, it's dynamically typed language
	var a = 'moo';	//which is a string
	//later on we can do
	a = 1;	//which is a number
	in Javascript, the type of variable is declared when we run the application

	in a static language like Java the variable is declared before we run the application

	in dynamic language, it's easier to get up and running
	but find problems when you run the application

	in static language, you can find problems early on

	
Difference between '==' and '==='

the triple checks between type and value

the double only checks between the value

javascript equality table on github (may be on google)


What is the type NaN?

	Stands for not a number
	typeof(NaN) is number
	so
	“abc”/4 returns NaN

	NaN compared to any other value is false, even itself!
	So how do we compare with NaN

	function called isNaN(NaN)
	returns true
	but this has problems
	
	isNaN(1) returns false
	isNaN(“1”) returns false
	isNaN(“A”) returns true
	why?
	The parameter that is being passed in is trying to coerce into a number
	
	is pretty useless
	there is a little trick
	
	how to check for NaN?
	How do we check if variable is NaN?

	(re-watch video again)


What are the different scopes in Javascript?
	
	by scope we mean lifetime of a variable
	any variable declared outside of a function goes to the global object

	another scope is function or local variables
	if we try to use the variable outside of function it won't work b/c it doesn't exist


What is variable hoisting?

	Example
	console,log(a);
	var a = 1;
	returns undefined

	automatically hoist order and puts var a = 1; at the top of console.log(a)
	still returns undefined though

	same for functions

	if you have an anonymous function then it won't work
	so,
	var foo = function();
	returns type error


What is the Scope Chain?

	 Not hard but easier to understand with video
	looks inside its inner scope and goes outward to look for defined variable






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














*/