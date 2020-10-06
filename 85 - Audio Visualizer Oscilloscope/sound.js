import { hslToRgb } from './utils';

const WIDTH = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyzer;
let bufferLength;

function handleError() {
  console.log('error');
}

function drawTimeData(timeData) {
  //   inject the time data in our timeData
  analyzer.getByteTimeDomainData(timeData);
  //   console.log(timeData);
  // now that we have the data lets turn it into something visual
  // 1. clear the canvasTODO
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  // 2. set up some canvas drawing
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#ffc600';
  ctx.beginPath();
  const sliceWidth = WIDTH / bufferLength;
  let x = 0;
  timeData.forEach((data, i) => {
    const v = data / 128;
    const y = (v * HEIGHT) / 2;
    // draw our lines
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    x += sliceWidth;
  });
  //   console.log(sliceWidth);
  ctx.stroke();
  // call itself as soon as possible
  requestAnimationFrame(() => drawTimeData(timeData));
}
function drawFrequency(frequencyData) {
  // get the frequency data into our frequencydata array
  analyzer.getByteFrequencyData(frequencyData);
  // figure out bar width
  const barWidth = (WIDTH / bufferLength) * 2.5;
  console.log(barWidth);
  let x = 0;
  frequencyData.forEach(amount => {
    // 0 to 255
    const percent = amount / 255;
    const [h, s, l] = [360 / (percent * 360), 0.8, 0.5];
    const barHeight = (HEIGHT * percent) / 2;

    // TODO: convert the colour to HSL todo
    const [r, g, b] = hslToRgb(h, s, l);
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
    x += barWidth + 1;
  });
  //   console.log(frequencyData);
  requestAnimationFrame(() => drawFrequency(frequencyData));
}

async function getAudio() {
  const stream = await navigator.mediaDevices
    .getUserMedia({ audio: true })
    .catch(handleError);
  const audioCtx = new AudioContext();
  analyzer = audioCtx.createAnalyser();
  const source = audioCtx.createMediaStreamSource(stream);
  source.connect(analyzer);
  // How much data should we collect
  analyzer.fftSize = 2 ** 10; // repeticiones de la serie de fourier, intensidad de las ondas
  // pull the data off the audio
  // how many pieces of data are there?
  bufferLength = analyzer.frequencyBinCount;
  const timeData = new Uint8Array(bufferLength);
  //   console.log(timeData);
  const frequencyData = new Uint8Array(bufferLength);
  //   console.log(frequencyData);
  drawTimeData(timeData);
  drawFrequency(frequencyData);
}

getAudio();
