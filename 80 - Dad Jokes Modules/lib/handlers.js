import { fetchJoke } from './index.js';
import { loader, jokeHolder, jokeButtonSpan } from './elements.js';
import buttonText from '../data/buttonText.js';
import { randomItemFromArray } from './utils.js';

export async function handleClick() {
  // joke is returned by fetchJoke function in data
  const { joke } = await fetchJoke(loader);
  jokeHolder.textContent = joke;
  // chaging button
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}
