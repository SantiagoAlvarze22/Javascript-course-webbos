const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}/?q=${query}`);
  const data = await res.json();
  return data;
}

async function handleSubmit(e) {
  e.preventDefault();
  const el = e.currentTarget;
  // turn the form off
  el.submit.disabled = true;
  // submit the search
  const recipes = await fetchRecipes(el.query.value);
  console.log(recipes);
  el.submit.disabled = false;
}

form.addEventListener('submit', handleSubmit);
fetchRecipes('pizza');
