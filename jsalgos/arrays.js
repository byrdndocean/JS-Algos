// Arrays 
// remember arrays are index based
// starting at 0

let city0 = "Atlanta";
let city1 = "Baltimore";
let city2 = "Chicago";
let city3 = "Denver";
let city4 = "Los Angeles";
let city5 = "Seattle";

// instead of having all of these, it's easier to put these into an array

let cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

// now we can target the city by index and not by name
// example cities[3] which will give us Denver
// instead of doing city3

// same naming conventions of variables
// Only letters, numbers, $ and _ are legal.
// The first character can't be a number. NO spaces
// More often array names are plural




// Adding and removing elements

// You can declare an empty array just like an empty variable

let animals = [];

// Now let's add some values to this array

animals[0] = "dog";
animals[1] = "cat";
animals[2] = "bird";

// when adding values to an array, we don't have to go in order

animals[5] = "lizard";
animals[7] = "snake";

// not a good idea to add in different order

// now let's modify the array a bit

animals.pop

// pop removes the last element from an array

animals.push();

// push() adds to the end of an array


animals.shift();

// shift() removes the element from the beginning of an array

animals.unshift();

// unshift() adds one or more elements to the beginning of an array

animals.splice();

// "The first digit inside the parenthesis is the index of the position where you wnat to start adding if you're adding an ddeleting if you're deleting.  The second digit is the number of existing elements to remove, starting with the first element that comes after the element(s) that you're splicing in."

animals.splice(2, 0, "pig", "duck", "emu");

// above example This let's you add without removing anything

animals.splice(2, 2);

//above example this let's you remove without adding anything





