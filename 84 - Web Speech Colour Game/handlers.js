import { isValidColor } from './colors';

function logWords(results) {
  // console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
  logWords(results);
  const words = results[results.length - 1][0].transcript;
  // console.log(words);
  // lowercase everything
  let color = words.toLowerCase();
  // strip any spaces out
  color = color.replace(/\s/g, '');
  if (!isValidColor(color)) return; // that's all
  // if it is, then show the UI for that
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');

  console.log(colorSpan);
  console.log('this is a valid color');
  console.log(color);

  // change the background color
  document.body.style.backgroundColor = color;
}
