const wes = document.querySelector('.wes');

// Element selectors
// console.log(wes.children);
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);

// console.log(wes.childrenNodes);

// node selectors

// el.childrenNodes
// el.firstChild
// el.previousSibling
// el.nextSibling
// el.parentNode

const p = document.createElement('p');
p.textContent = 'I will be removed';

document.body.appendChild(p);

p.remove(); // borrar

console.log(p);
