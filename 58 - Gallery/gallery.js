function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery Found!!');
  }
  // select the elemens we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.log('opening moda');
    // first check if the modal is already open
    if (modal.matches('.open')) {
      console.info('modal already open');
      return; // stop the function from running
    }
    modal.classList.add('open');

    // Event listeners to be bound when we open the modal:
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    // TODO: add event listeners forclicks and keyboard..
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    // return avoid running the function several times, if check some is true stop the other
    if (e.key === 'Escape') return closeModal();
    if (e.key === 'ArrowRight') return showNextImage();
    if (e.key === 'ArrowLeft') return showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(el) {
    if (!el) {
      console.info('no image to show');
    }
    // update the modal with this info
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }
  // these are out even listeners
  images.forEach(image =>
    image.addEventListener('click', e => showImage(e.currentTarget))
  );

  // loop over each image
  images.forEach(image =>
    // attach an event listener for each image
    image.addEventListener('keyup', e => {
      // when that is keyup, check if it was enter
      if (e.key === 'Enter') {
        // if it was, show that image
        showImage(e.currentImage);
      }
    })
  );

  modal.addEventListener('click', handleClickOutside);
}

// use it on the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
