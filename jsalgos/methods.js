/*

//CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    return str.split('')
    .reverse()
    .join('');
    //no space b/c we don't want separate words

    //////////////////////////////
    let revString = '';
    for(let I = str.length -1; I >=0; i--) {
	revString = revString + str[i];
	}
    return revString;

    ///////////////////////////

    let revString = '';
    for(let I = 0; I <= str.length – 1; i++) {
        revString = str[i] + revString;
}
    return revString;

    ////////////////////////////
    
    (newer way, better)

    let revString = '';
    for(let char of str) {
	revString = char + revString;
}
    return revString;

///////////////////////////

(newer way, better)

    let revString = '';
    str.split('').forEach(char => revString = char + revString);
	return revString;
}

    /////////////////////////////
(newer way, better, most impressive)

return str.split('').reduce((revString, char) => char + revString, '');
}

CHALLENGE 2: VALIDATE A PALINDROME
WORD THAT IS THE SAME FORWARDS OR BACKWARDS
RETURN TRUE IF IT'S A PALINDROME AND FALSE IF IT'S NOT

function isPalindrome(str) {
	const revString = str.split('').reverse().join('');

	return revString === str;
}

    ////////////////////////

CHALLENGE 3: REVERSE AN INTEGER
//RETURN AN INTEGER IN REVERSE

function reverseInt(int) {
    const revString  = int.toString().split('').reverse().join('');

    return parseInt(revString) * Math.sign(int);
}

   const output = reverseInt(-12345);
   console.log(output);


/////////////////////////////

CHALLENGE CAPITALIZE LETTERS
//Return a string with the first letter of every word capitalized.

Function capitalizeLetter(str) {
    const strArr = str.toLowerCase().split(' ');

    for(let i=0; i< strArr.length; i++){
	strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
	strArr[i].substring(1);
    }
    return strArr.join(' ');
}

const output = capitalizeLetters('i love javascript');

console.log(output);

    ////////////////////////////

ANOTHER WAY WITH THE MAP METHOD
(PROBABLY THE BEST WAY)

    function capitalizeLetters(str) {

    return str
	.toLowerCase()
	.split(' ')
	.map(word => word[0].toUpperCase() + word.substr(1))
	.join(' ');
    }

    ///////////////////////////

ANOTHER WAY USING REGULAR EXPRESSION

    return str.replace(/\b[a-z]/gi, function(char) {
	return char.toUpperCase();
    });
}

const output = capitalizeLetters('i love javascript');

console.log(output);



CHALLENGE 5: MAX CHARACTER
//RETURN THE CHARACTER THAT IS MOST COMMON IN A STRING

function maxCharacter(str) {
    const charMap = {};

    str.split('').forEach(function(char) {
	if(charMap[char]) {
	    charMap[char]++;
	} else {
	    charMap[char] = 1;
	}
	});
	
	for(let char in charMap) {
		
	}	
}

const output = maxCharacter('javascript');

console.log(output);




/////////////////////////////////////////////////////////////////////////////////
********************************
////////////////////////////////////////////////////////////////////////////////


.filter()

//it looks for a true or false value

	const words = [“spray”, “limit”, “elite”, “exuberant”, “destruction”, “present”, “happy”];

	let longWords = words.filter(word => word.length > 6);

	console.log(longWords);


.map

//not adding or deleting but updating and returning a new array

	var numbers = [1, 4, 9];

	var roots = numbers.map(Math.sqrt);
	
	// roots is now [1, 2, 3]
	//numbers is still [1, 4, 9]


.reduce()

//building a brand new object/array/something
//

	[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
		return accumulator + currentValue;
	},0);

.forEach()
// a better way to loop through things

	const items = ['item1', 'item2', 'item3'];
	const copy = [];

	items.forEach(function(item) {
	    copy.push(item)
	}};


.some
//only 1 value has to pass in order for it to be true

	function isBiggerThan10(element, index, array) {
	    return element > 10;
	}
	
	[2, 5, 8, 1, 4].some(isBiggerThan10); // false
	[12, 5, 8, 1, 4].some(isBiggerThan10); // true


Object.values(), Obejct.keys(), Object.entries()

//used to grab values out of an object

//array like object
var obj = { 0: 'a', 1: 'b', 2: 'c'};
console.log(Object.keys(obj)); // console: ['0', '1', '2']

var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // ['foo', 'bar'], ['baz', 42] ]


MORE EXAMPLES

.FILTER

const myArray = [24, 2, 345, 24, 2]

const ans = myArray.filter(1 => 1 >= 24})
	console.log(ans)



.MAP
//we want to add 10 to each item in the array

const myArray = [24, 2, 345, 24, 2]

const ans = myArray.map(1 => 1 + 10)
console.log(ans)


.REDUCE

const myArray = [34, 24, 124, 24];

const answer = myArray.reduce((acc, val) => {
	return acc + val
	});
    console.log(answer)





/////////////////////////////////////////////////////////////////////////////////
********************************
////////////////////////////////////////////////////////////////////////////////





20 STRING METHODS

var stringOne = “freeCodeCamp is the best place to learn”
var stringTwo = “frontend and backend development”

// charAt()
console.log(stringOne.charAt(1))
//”r”

// charCodeAt()
//unicode character 
console.log(stringOne.charCodeAt(1))
//114

// concat()
//joins two or more string together
console.log(stringOne.concat(stringTwo))


// endsWith()
// checks whether a string ends with a specified string or characters
console.log(stringOne.endsWith(“learn”))
//true
console.log(stringOne.endsWith(“to”))
//false

// fromCharCode()
//returns the letter that's equal to the charcode
console.log(String.fromCharCode(114))

// includes()
// checks whether a string contains the specified string or character
console.log(stringTwo.includes(“end”))
//true because it contains the word “end” from “frontend”

// indexOf()
//gives index position of first time the word appears
console.log(stringTwo.indexOf(“end”))
//5

// lastIndexOf()
return the index of the last found occurrence with a specified value in a string
console.log(stringTwo.lastIndexOf(“end”))
//17



// match()
//searches a string for a match against a regular expression and return the matches
console.log(stringTwo.match(/end/g))
//an array of each match
// [“end”, “end”]

// repeat()
console.log(stringOne.repeat(3))
//just repeats it the number of times you specifiy

// replace()
//searches a string for a specified value or regular expression and returns a new string where the specified values are
console.log(stringTwo.replace(/end/g, “END”))
//”frontEND and backEND development”

// search()
going to search a string for a specified value or regular expression and return the position of the match
console.log(stringTwo.search(“end”))
//5

// slice()
//extracts a part of the string and return a new string
console.log(stringTwo.slice(2, 4))
//on 
//starts at index 2 and ends on 3 which is one before 4

// split()
//splits a string into an array of sub strings
//pass in the character you want
console.log(stringOne.split(“ “))
//puts quotes around each word

// startsWith()
//does it start with specified argument
console.log(stringOne.startsWith(“free”))
//true / b/c this string starts with free from freeCodeCamp

// substr()
// extract the characters from a string from a start position and through the number of characters
console.log(stringTwo.substr(2, 4))
//”onte”
//start at 2 and 4 characters overall

// substring()
starting with index and go to that index -1
console.log(stringTwo.substring(2, 4))
//”on”

// toLowerCase()
console.log(stringOne.toLowerCase())

// toUpperCase()
console.log(stringOne.toUpperCase())

// trim()
var stringThree = “        Subscribe now!         “;
console.log(stringThree.trim())

//removes white space from either side of string




/////////////////////////////////////////////////////////////////////////////////
********************************
////////////////////////////////////////////////////////////////////////////////






10 COMMON ARRAY METHODS


var arr = [“a”, “b”, “c”];

// push
// add a new element to the end of an array
arr.push(“d”);
console.log(arr)


// pop
removes the last element from an array and returns that element
console.log(arr.pop());

//var arr2 = [“g”, “q”];
console.log(arr.concat(arr2));
// [“a”, “b”, “c”, “g”, “q”]
it doesn't effect the original array

// join
joins the elements in an array to create a string but does not modify the original
console.log(arr.join(“”));
//”abc”
console.log(arr.join(“!”);
// “a!b!c”



//reverse
//reverses the elements in an array
console.log(arr.reverse());
// [“c”, “b”, “a”]
// this DOES change the original array

// shift
removes the first element in the array and return that element
console.log(arr.shift());
“c”
//THIS DOES CHANGE THE ORIGINAL

//unshift
// adds to the beginning of the array
console.log(arr.unshift(“p”));
console.log(arr);
[“p”, “b”, “a”]

//slice
//selects part of an array and return the new array you've selected
//original is unaffected
console.log(arr.slice(1,2));
// returns “b”
2nd 2, removes 2 items

// sort
arr.push(“i”);
arr.push(“f”);
arr.sort(arr);
console.log(arr);
//[“a”, “b”, “f”, “i”, “p”]


// splice
// similar to slice, but modifies the original
console.log(arr.splice(2, 2, “JS Nuggets”));
console.log(arr);
//starts at index 2, removes 2, replaces at index 2 with “JS Nuggets”
// we get
// [“a”, “b”, “JS Nuggets”, “p”]





/////////////////////////////////////////////////////////////////////////////////
********************************
////////////////////////////////////////////////////////////////////////////////




ARRAY ITERATION
8 METHODS

//iterate – going through an array and doing something with each item in the array

// forEach

[1, 2, 3].forEach(function (item, index) {
    console.log(item, index); });
// we get 1 0 , 2 1, 3 2

// map
// takes the item from the array, and puts new thing in new array
const three = [1, 2, 3];
const doubled = three.map(function (item) {
	return item * 2;
});
console.log(doubled);
// we get [2, 4, 6]

// filter
//takes array and check each item to see if it's true or false, puts back true and leaves out false
// creates a new array
const ints = [1, 2, 3];
const evens = ints.filter(function (item) {
    return item % 2 === 0;
});
    console.log(evens);
//we get [2]


// reduce
// do something and pass the result to the next iteration in the array
const sum = [1, 2, 3].reduce(function (result, item) {
	return result + item;
} 0);
console.log(sum)
// we get 6

//some
// just check if any item in meets the condition
const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
	return item < 0;
});
console.log(hasNegativeNumbers);
//We get true b/c -1 is < 0

// every 
//same as some except ever item has to meet the condion to pass

// find
// goes through every item if it passes then it returns it
const objects = [{ id: 'a' }, {id: 'b' }, { id: 'c' }];
const found = objects.find(function (item) {
	return item.id === 'b';
});
console.log(found);
// we get Object { id: “b”}

// find index
// same as find except it returns the index of the item
// if doesn't find it returns -1




/////////////////////////////////////////////////////////////////////////////////
********************************
////////////////////////////////////////////////////////////////////////////////



REMOVING DUPLICATES FROM AN ARRAY

let a = [1, 2, 5, 2, 1, 8];
// We Want [1,2,5,8];
//Good to ask if you want to preserve the order

let b = [];

let len = a.length;

for (let i=0; i< len; i++) {
	if(b.indexOf(a[i]) === -1){
	b.push(a[i]);
	}}

console.log(b);

ANOTHER WAY
OF LOOP

let a = [1, 2, 5, 2, 1, 8];
// We Want [1,2,5,8];

obj = {};

for(let I of a){		//takes out duplicates
    obj[i] = true;
}

let b = Object.keys(obj);		//this is how we return array

console.log(b)






ANOHTER WAY
BEST WAY
SPREAD OPERATOR

let a = [1, 2, 5, 2, 1, 8];
// We Want [1,2,5,8];

console.log([... new Set(a)]);

//We Get [1,2,5,8];



HOW TO CREATE A COPY OF AN ARRAY

let a = [1,2,3,4];

let b = [];

for(let i=0; i<a.length; i++){
    b.push(a[i]);
}

console.log(b);


ANOTHER WAY
ES6

let a = [1,2,3,4];

let b = Object.assign([],a);

console.log(b);

//Object in JavaScript is a master constructor
//It has lots of methods, one of them is assign
//left side will copy from right side
// assign([],a);

ANOTHER WAY
ES6
SPREAD OPERATOR

let a = [1, 2, 3, 4];

let b = [...a];
console.log(b)


BASIC DEFINITIONS
//Shallow Copy
	just copies the elements within

//Deep Copy
	copies the protypes as well



APPLICATIONS OF JAVASCRIPT SPREAD OPERATORS

let x = [1,2,3,4]; 

let y = Object.assign([], x);

console.log(y)
//This is a shallow copy

ANOTHER WAY

//Spread Operator

let x = [1, 2, 3, 4];

let y = [...x]

console.log(y)


ANOTHER WAY
COMBINING 

let x = [1,2,3,4]; 
let y = [5, 6, 7]

console.log([...x,...y]);
OR
console.log(x.concat(...y));

//this is a way to visualize this
//[...x,...y] = [1, 2, 3, 4, 5, 6, 7]


ANOTHER EXAMPLE

let x = [1,2,3];
let func = function(...arg){
	console.log(arg)
}

func(...x)

ANOTHER EXAMPLE

console.log(Math.hypot(3,4)
//what happens is 3^2=9
//4^2 = 16
//9+16 = 25

let x = [3, 4,]
console.log(Math.hypot(...x))
//same thing as above just a way to write it with the spread operator

//Better to use spread operator if you have more than 2 arguments
//the old way would be too much work to type out

FOR EXAMPLE

let x = [3, 4, 3, 1, 3, 4, 34, 47, 34, 34]
console.log(Math.min(...x))
//We get 1

FOR EXAMPLE

let x = [3, 4, 3, 1, 3, 4, 34, 47, 34, 34]
console.log(Math.max(...x))
//We get 47



/////////////////////////////////////////////////////////////////////////////////
********************************
////////////////////////////////////////////////////////////////////////////////




















*/