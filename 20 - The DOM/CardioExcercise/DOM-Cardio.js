// Make a div
const divWrapper = document.createElement('div');

// add a class of wrapper to it
divWrapper.classList.add('wrapper');

// put it into the body
document.body.appendChild(divWrapper);

// make an unordered list
const ul = document.createElement('ul');

// add three list items with the words "one, two three" in them
const li1 = document.createElement('li');
li1.textContent = 'one';
const li2 = document.createElement('li');
li2.textContent = 'two';
const li3 = document.createElement('li');
li3.textContent = 'three';
// put that list into the above wrapper
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// document.body.insertAdjacentElement('afterbegin', ul);
divWrapper.appendChild(ul);

// create an image
const image = document.createElement('img');
// set the source to an image
image.src = 'https://source.unsplash.com/random/200x200';
// set the width to 250
image.width = 250;
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
divWrapper.append(image);

// with HTML string, make a div, with two paragraphs inside of it

const divHTML = `
    <div class="paragraphs">
        <p>This is the first Paragraph</p>
        <p>This is the second Paragraph</p>
    </div>
`;
// put this div before the unordered list from above
// const divHTMLFragment = document
//   .createRange()
//   .createContextualFragment(divHTML);

// document.body.appendChild(divHTMLFragment);
ul.insertAdjacentHTML('beforebegin', divHTML);
// add a class to the second paragraph called warning
const paragraphs = document.querySelector('.paragraphs');
paragraphs.lastElementChild.classList.add('warning');
// paragraphs.children[1].classList.add('warning');
// remove the first paragraph
paragraphs.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const generatePlayerCard = (name, age, height) => {
  const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete" type="button">&times; Delete</button>
    </div>
    `;
  return html;
};

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const divCards = document.createElement('div');
divCards.classList.add('cards');

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('wes', 12, 16);
cardsHTML += generatePlayerCard('sant', 12, 16);
cardsHTML += generatePlayerCard('wewe', 12, 16);
cardsHTML += generatePlayerCard('weqwws', 12, 16);

divCards.innerHTML = cardsHTML;
divWrapper.insertAdjacentElement('beforebegin', divCards);
console.log(cardsHTML);

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
console.log(buttons);
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.parentElement.remove();
  // buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
