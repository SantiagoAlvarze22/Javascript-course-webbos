function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove the popup entirely
  popup.remove();

  /* eslint-disable no-param-reassign */
  popup = null;
  /* eslint-enable no-param-reassign */

  //   popup.parentElement.removeChild(popup);
}

function ask(options) {
  return new Promise(async function(resolve) {
    // first we need to create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
            <label>${options.title}</label>
            <input type="text" name="input" />
            <button type="submit">Submit</button>
        </fieldset>
    `
    );
    // check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      // TODO: LISTEN FOR A CLICK ON THAT CANCEL BUTTON
    }
    // listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      function(e) {
        e.preventDefault();
        resolve(e.target.input.value);
        // remove the addeventlistener once is run {once:true}
        // remove it from the DOM entirely
      },
      { once: true }
    );
    // when someone does submit it, resolve the data that was in the input box!!

    // insert that popup into the DOM
    document.body.appendChild(popup);
    // put a vary small timeout before we add the open class
    await wait(50);
    popup.classList.add('open');
  });
}

// select all button that ahve a question
