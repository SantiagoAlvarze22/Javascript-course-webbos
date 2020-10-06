import { handleResult } from './handlers';
import { colorsByLength, isDark } from './colors';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
  return colors
    .map(
      color =>
        `<span class="color ${color}" ${
          isDark(color) ? 'dark' : ''
        } style="background:${color}">${color}</span>`
    )
    .join('');
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// asking to the browser for mic permissions
function start() {
  // see if their browser supports this
  if (!('SpeechRecognition' in window)) {
    console.log('Sorry your browser does not support speech recognition');
    return;
  }
  // it does work
  console.log('starting...');
  // make a new speech recognition
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult; // onresult bc addEventListener does not exist
  recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);
