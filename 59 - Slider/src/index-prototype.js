function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  // select the element need for the slider
  this.slides = slider.querySelector('.slides');
  this.slider = slider;
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  // when this slide is c reated, run the estart slider function
  this.startSlider();
  this.applyClasses();

  // event Listeners

  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', () => this.move());
}

// function to startSlider
Slider.prototype.startSlider = function() {
  this.current =
    this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function() {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.move = function(direction) {
  // first strip all the classes off the current slides
  const classesToRemove = ['prev', 'current', 'next'];
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  if (direction === 'back') {
    // make an new array of the new values, and destructure them over and into the prev, current and next variables
    [this.prev, this.current, this.next] = [
      // get the prev slide, if there is non, get the las slide form the entire slider for wrapping
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      // get the next slide, on if it's at the end, loop around and grab the first
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);

// creating the movement by the arrowkeys
window.mySlider = mySlider;
window.addEventListener('keyup', e => {
  if (e.key === 'ArrowRight') {
    mySlider.move();
  }
  if (e.key === 'ArrowLeft') {
    mySlider.move('back');
  }
});

window.dogSlider = dogSlider;

window.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowRight') {
    dogSlider.move();
  }
  if (e.key === 'ArrowLeft') {
    dogSlider.move('back');
  }
});
