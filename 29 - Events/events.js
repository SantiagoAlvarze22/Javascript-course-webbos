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
const buyButtons = document.querySelectorAll('.buy');

function buyItem() {
  console.log('Buy Item');
}

// buyButtons.forEach(buyButton => {
//   buyButton.addEventListener('click', buyItem);
// });

// another way is atteaching a function

function attachBuyButtonClick(buyButtton) {
  buyButtton.addEventListener('click', buyItem);
}

buyButtons.forEach(attachBuyButtonClick);
