// const age = 100;

// function go() {
//   const hair = 'blonde';
// }
// // define de function and then call its variable

// console.log(age);
// // console.log(hair); // it's no defined

// function myAge() {
//   const myAge = 20;
//   const hair = 'blonde';
//   console.log(myAge);
//   console.log(age);
//   console.log(hair); // it show the value in the console
// }

// myAge();
// console.log(hair); // is not defined

// block scoped
// if  I did this with var and without expressin my global variable inside the function is okay, but if a declare const and let, is not allowed to acces to them globally
// function isCool(name) {
//   let cool;
//   if (name === 'Santi') {
//     cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// isCool('Santi');

// if I want to use a a for loop and access to the variable, it depends on what kind of variable I use
// let i, doesn't let call the variable in the windows object, just inside the loop
// var i, I can use it and allow me to access from the windows object
// eslint-disable-next-line no-plusplus
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const dog = 'snickers';
// function logDog() {
//   console.log(dog);
// }

// function go() {
//   const dog = 'sunny';
//   logDog();
// }

// go(); // sinickers is the value because is not called inside the block scope

const dog = 'snickers';
function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog(dog);
}

go(); // sunny, because is pass as a parameter

// function scope

function sayHello(name) {
  function yell() {
    console.log(name.toUppercase());
  }
  yell();
}

sayHello();
