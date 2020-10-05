import first, { returnHi as sayHi, last, middle } from './utils.js';
// import wes from './wes.js';
import * as everything from './wes.js';
import { handleButtonClick } from './handlers.js';

const name = 'wes';

console.log(sayHi(name));
console.log(last, middle);
console.log('is working');
console.log(everything);
console.log(first);

const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick);
