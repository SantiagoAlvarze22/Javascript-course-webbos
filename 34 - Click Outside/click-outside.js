const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest('.card');
  //   console.log(card);
  // Grab The Image Source
  const imgSrc = card.querySelector('img').src;
  console.log(imgSrc);
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);
