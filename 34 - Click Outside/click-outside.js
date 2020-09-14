const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest('.card');
  //   console.log(card);
  // Grab The Image Source
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  // Populate the modal with the new info
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}</p>
  `;
  // Show the modal
  modalOuter.classList.add('open');

  //   console.log(imgSrc);
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

// function that close the modal outer

function closeModal() {
  modalOuter.classList.remove('open');
}

// with clock out of the modal-inner
modalOuter.addEventListener('click', function(e) {
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

// with the key escape

window.addEventListener('keydown', e => {
  console.log(e);
  if (e.key === 'Escape') {
    closeModal();
  }
});
