const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold out state
let items = [];

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
        <input 
            value="${item.id}" 
            type="checkbox"
            ${item.complete && 'checked'}
        >
        <span class="itemName">${item.name}</span>
        <button aria-label="remove ${item.name}" value="${
        item.id
      }">&times;</button>
      </li>`
    )
    .join('');

  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

// Show the items saved in the localStorage, evey time that the page load
function restoreFromLocalStorage() {
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // items = lsItems;
    // lsItems.forEach(item => items.push(item));
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated')); // allows to delete form the DOM the value
  }
}

function deleteItem(id) {
  console.log('delete', id);
  // update our items array without this one
  items = items.filter(item => item.id !== id);
  console.log(items);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('holi', id);
  const itemRef = items.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// even delegation:  we listen or the clock on the list <UL> but then delegate the click over to the button if that is was clicked
list.addEventListener('click', e => {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});
restoreFromLocalStorage();
