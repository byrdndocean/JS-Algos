// Making the code more simple with nesting
//Easier to read through for humans

if ((x === y || a === b) && c === d) {
  g = h;
}
else {
  e = f;
}

// So it won't take as long to read through
// We can use some simple nesting technique

if (c === d) {
  if (x === y) {
    g = h;
  }
  else if (a === b) {
    g = h;
  }
  else {
    e = f;
  }
}
else {
  e = f;
}

// Nest levels are communicated to JavaScript by the positions of the curly brackets.

