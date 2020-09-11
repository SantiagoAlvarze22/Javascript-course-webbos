const butts = document.querySelector('.butts');
const buttonCool = document.querySelector('.cool');

function handleClick() {
  console.log('I am a click');
}

const hooray = () => console.log('Hooray');

butts.addEventListener('click', function() {
  console.log('holi click');
});

buttonCool.addEventListener('click', hooray);

// how to removed a event listener

butts.removeEventListener('click', handleClick);

// Listen on multiple items
// const buyButtons = document.querySelectorAll('.buy');

// function buyItem() {
//   console.log('Buy Item');
// }

// buyButtons.forEach(buyButton => {
//   buyButton.addEventListener('click', buyItem);
// });

// another way is atteaching a function

// function attachBuyButtonClick(buyButtton) {
//   buyButtton.addEventListener('click', buyItem);
// }

// buyButtons.forEach(attachBuyButtonClick);

const buyButtons = document.querySelectorAll('.buy');

function handleBuyButtonClick(event) {
  console.log('you clicke a button');
  const button = event.target;
  //   console.log(event.target);
  //   console.log(event.currentTarget);
  //   console.log(event.target === event.currentTarget);
  //   event.stopPropagation(); // Para evitar que el evento se vaya hacia los otros elementos que tienen listeners
  //   console.log(button.textContent);
  //   console.log('You are buying it!');
  //   console.log(parseFloat(event.target.dataset.price));
}

buyButtons.forEach(buyButton => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

// eventlistener in Windows, to show the event bubbling

// document.addEventListener('click', function() {
//   console.log('You clicked the document');
// });

window.addEventListener(
  'click',
  function(event) {
    console.log('You clicked the window');
    console.log(event.target);
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function(e) {
  console.log(e.cuurentTarget);
  console.log(this);
});
