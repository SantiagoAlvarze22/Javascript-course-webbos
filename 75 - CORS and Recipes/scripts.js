const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}/?q=${query}`);
  const data = await res.json();
  return data;
}

function displayRecipes(recipes) {
  const html = recipes.map(
    recipe => `
    <div class="recipe">
        <h2>${recipe.title}</h2>
        <p>${recipe.ingredients}</p>
        ${recipe.thumbnail &&
          `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
          <a class="link" href="${recipe.href}"> View Recipe </a>
    </div>`
  );
  recipesGrid.innerHTML = html.join('');
}
async function fetchAndDisplay(query) {
  // turn the form off
  form.submit.disabled = true;
  // submit the search
  const recipes = await fetchRecipes(query);
  console.log(recipes);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

async function handleSubmit(e) {
  e.preventDefault();
  fetchAndDisplay(form.query.value);
}

form.addEventListener('submit', handleSubmit);
// on page load run it with pizza
fetchAndDisplay('pizza');
