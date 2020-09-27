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
  // fire off a custom even that will tell anyone else who cares that the items have been updated
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}
function displayItems() {
  const html = items
    .map(
      item => `<li class="shopping-item">
        <input type="checkbox">
        <span class="itemName">${item.name}</span>
        <button aria-label="remove ${item.name}">&times;</button>
      </li>`
    )
    .join('');

  list.innerHTML = html;
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
