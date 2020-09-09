const myParagraph = document.createElement('p');
myParagraph.classList.add('especial');
myParagraph.textContent = 'Soy el texto dentro del wrapper';

console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/400x400';
myImage.alt = 'Nice Pic';
myImage.classList.add('myImage');
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// Oh shoooot I forgot to create the element
const heading = document.createElement('h2');
heading.textContent = 'Cool Things'; // as a heading

myDiv.insertAdjacentElement('afterbegin', heading);

// creating a list

const list = document.createElement('ul');
const li3 = document.createElement('li');
li3.textContent = 'three';
list.appendChild(li3);
document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'two';
li3.insertAdjacentElement('beforebegin', li2);
