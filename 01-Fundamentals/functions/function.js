// const p = document.querySelector('p');
// console.log(p);

// custom function

// function definition
// default values taxRate, tipRate
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this the funcion body
  //   console.log('hello billy');
  //   console.log(billAmount, taxRate);
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// function with default values

const myBill = calculateBill(500);
console.log(myBill);

const ana = 30;
const myTotal3 = calculateBill(ana + 40, 1.4);
console.log(myTotal3);

// function call
// const myTotal = calculateBill(100, 0.13);
// const myTotal2 = calculateBill(200, 0.13);

// console.log(myTotal, myTotal2);
// console.log(`Hello billy your total is $${calculateBill()}`);

// Cuando le paso argumentos a mi funcion con otros nombres, el reemplaza sus parametros con estos
// const santiBill = 600;
// const santiTax = 1.3;

// const myTotal = calculateBill(santiBill, santiTax);
// console.log(myTotal);

function greet(name) {
  return `hello ${name}`;
}
// a value of this function is and output

// const sayHello = greet('Santiago');
// console.log(sayHello);

// output of a function becoming a parameter of another one

function yell(name = '') {
  return `hello ${name.toUpperCase()}`;
}

// console.log(yell(greet('Santi')));

// Ways to make a function in js
/* function doctoriza(name) {
  return `Dr. ${name}`;
} */

// función anónima
/*
function (firstName) {
    return `Dr. ${name}`;
}
*/

// function expression
const doctorize = function(name) {
  return `Dr. ${name}`;
};

// Arrow function

// function inchToCM(inches) {
//   return inches * 2.54;
// }

// converting a function into a anonymous one (function expression)
// const inchToCM = function(inches){
//     return inches * 2.54;
// }

// convertion a function expression to an arrow function
const inchToCM = inches => inches * 2.54;

// converting function

/*
function add(a, b = 3) {
  const total = a + b;
  return total;
}

const add = function (a,b =3){
    const total = a + b;
    return total;
}
*/

const add = (a, b = 3) => a + b;

// function using as an object

// function makeABaby(name, last){
//     const baby = {
//         name: `${name} ${last}`,
//         age: 1,
//       };
//       return baby;
// }

const makeABaby = (name, last) => {
  const baby = {
    name: `${name} ${last}`,
    age: 1,
  };
  return baby;
};

// IIFE
// Immediately Invoked Function Expression

(function() {
  console.log('raining');
  return `life`;
})();

// if I want to set a value of my IIFE

(function(age) {
  console.log('raining');
  return `life ${age}`;
})(20);

// defining a method on an object

// const city = {
//   name: 'Medellin',
//   // Method
//   visit: function(neighborhood, date) {
//     return `The ${neighborhood}, date: ${date}`;
//   },
// };

// shorthand
const city = {
  name: 'Medellin',
  // Method
  visit(neighborhood, date) {
    return `The ${neighborhood}, date: ${date}`;
  },
  hola() {
    return 'hola';
  },
};

// callback function

// click callback
const button = document.querySelector('.clickMe');

const handeClick = () => {
  console.log('click');
};

// button.addEventListener('click', handeClick);

button.addEventListener('click', function() {
  console.log('Hola');
});

// timer callback
// SetTimeOut

setTimeout(function() {
  console.log('time to eat');
}, 1000);
