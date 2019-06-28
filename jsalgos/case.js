// Changing the case so computers will understand

let cityToCheck = prompt("Enter your city");
cityToCheck = cityToCheck.toLowerCase();
var cleanestCities = ["cheyenne", "sante fe", "tucson", "great falls", "honolulu"];
for (let i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    alert("it's one of the cleanest cities");
  }
}

// can have elements that are all upper
// use method cityToCheck = cityToCheck.toUpperCase();

 