function ask(options) {
  return new Promise(function(resolve) {
    // first we need to create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `
        <fieldset>
            <label>${options.title}</label>
        </fieldset>
    `
    );
    // check if they want a cancel button

    // listen for the submit event on the inputs
    // when someone does submit it, resolve the data that was in the input box!!
  });
}
