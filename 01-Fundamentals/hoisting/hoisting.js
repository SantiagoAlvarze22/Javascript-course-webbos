// Hoisting
// sayHi();

// function sayHi() {
//   console.log('hey!!');
//   console.log(add(10, 2));
// }

// function add(a, b) {
//   return a + b;
// }

// what should I do "Hoisting"

function add(a, b) {
  return a + b;
}

function sayHi() {
  console.log('hey!!');
  console.log(add(10, 2));
}

sayHi();
