/* 
function outer() {
  const outerVar = 'Hey I am the outer function';
  function inner() {
    const innerVar = "Hey I'am and inner bar";
    console.log(innerVar);
    console.log(outerVar);
  }
  return inner; //   inner();
}
// outer();
const innerFn = outer();
innerFn();
*/

function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function(name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting('Hello');
const sayHey = createGreeting('Hello');
console.log(sayHello('wes'));
console.log(sayHello('Santi'));
console.log(sayHey('Ana'));

// private variables
// is no way to acces to score variable

function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your name ${gameName} score is ${score}`;
  };
}

const hockeyGame = createGame('Hockey');
