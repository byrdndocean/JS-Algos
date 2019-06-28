// looping through arrays to generate new array

let firstNames = ["Billy ", "Louis ", "Henry ", "Ginny"];
let lastNames = ["Smith", "Wright", "Ham", "Williams"];
let fullNames = [];

for (let i = 0; i < firstNames.length; i++) {
  for (let j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}

