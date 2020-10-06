import { handleResult } from './handlers';
import { colorsByLength } from './colors';

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

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
