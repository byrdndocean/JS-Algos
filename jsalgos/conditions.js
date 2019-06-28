// Testing some simple conditions using if/else and comparison operators

if (weight > 300 && time < 6) {
  alert("Come to our tryout!");
}
else {
  alert("Come to our cookout!");
}



// Chaining conditions together
// adding one more


if (weight > 300 && time < 6 && age > 17 && gender === "male") {
  alert("Come to our tryout!");
}
else {
  alert("Come to our cookout!");
}

// OR operator
 if (SAT > avg || GPA > 2.5 || sport === "football") {
   alert("Welcome to College State!");
 }
 else {
   alert("Maybe College Football isn't right for you.")
 }


 // quick if statements
 if (age > 65 || age < 18 && res === "U.S.") {
   console.log("We Welcome all the Young and old");
 }
 else {
   console.log("Don't be late to work!")
 }

// More specific because of parenthesis

if ((age > 65 || age < 18) && res === "U.S.") {
  console.log("We welcome all the Young or Old US residents")
}

// More specific

if (age > 65 || (age < 18 && res === "U.S.")) {
  console.log("All the elderly are welcome as well as the U.S. youth")
}

