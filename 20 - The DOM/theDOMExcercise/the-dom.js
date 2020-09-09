// const p = document.querySelectorAll('p');
// const items = document.querySelector('.items');
// const itemImag = items.querySelector('img');
// const heading = document.querySelector('h2'); // the first one

// console.log(heading.innerHTML); // lo mismo que textContent
// console.log(heading.outerHTML); // Muestra toda la estructura
// console.dir(heading.textContent);
// // setting the textContent property on that element
// heading.textContent = 'Santi is cool';
// console.log(heading.textContent);

// // insertar texto with insertAdjacentText

// itemImag.insertAdjacentText('beforeBegin', 'hola');

// itemImag.insertAdjacentText('afterEnd', 'hola');

// Classes !

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');

console.log(pic.classList);

/* function is called, to calle the class round by a click and make the 
//image corner round */
function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);
