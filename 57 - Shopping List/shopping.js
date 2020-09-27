const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold out state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;

  // validate if is some value on it, it doesn't return anything if the value doesn't exist
  if (!name) return;

  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // Push the items into our state
  items.push(item);
  // clear the form when I hit the button add item
  e.target.reset();
}

shoppingForm.addEventListener('submit', handleSubmit);
