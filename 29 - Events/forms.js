const wes = document.querySelector('.wes');

wes.addEventListener('click', function(e) {
  const shouldChangePage = confirm('Estas seguro mor?');
  if (!shouldChangePage) {
    e.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', function(e) {
  //   e.preventDefault(); //consultar los valores de las propiedades
  //   console.log(e.currentTarget.name.value);
  //   console.log(e.currentTarget.email.value);
  //   console.log(e.currentTarget.agree.checked);

  // si el valor del nombre ingresado contien el string chad
  const name = e.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('sorry bro');
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.email.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
