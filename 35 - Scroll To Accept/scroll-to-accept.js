const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

// esta funcion
function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // console.log('REMOVING DISABLED');
    // stop observing the button
    ob.unobserve(terms.lastElementChild);
  }
}

// recibe la funcion y le da la raiz y el limite para que muestre o que idetifique a donde llega
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

// identifica el ultimo hijo para poder lanzar que está ahi
ob.observe(terms.lastElementChild);
