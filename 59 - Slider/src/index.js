function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }
  // create some variables for working with the slider

  let prev;
  let current;
  let next;

  // select the element need for the slider
  const slides = slider.querySelector('.slides');
  const prevButton = document.querySelector('.goToPrev');
  const nextButton = document.querySelector('.goToNext');

  // function to startSlider
  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log({ current, prev, next });
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    // first strip all the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction === 'back') {
      // make an new array of the new values, and destructure them over and into the prev, current and next variables
      [prev, current, next] = [prev.previousElementSibling, prev, current];
    } else {
      [prev, current, next] = [current, next, next.nextElementSibling];
    }
    applyClasses();
  }

  // when this slide is created, run the estart slider function
  startSlider();
  applyClasses();
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
