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
  console.log(timeData);
  const frequencyData = new Uint8Array(bufferLength);
  //   console.log(frequencyData);
  drawTimeData(timeData);
}

function drawTimeData(timeData) {
  //   inject the time data in our timeData
  analyzer.getByteTimeDomainData(timeData);
  console.log(timeData);
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

  ctx.stroke();
  // call itself as soon as possible
  requestAnimationFrame(() => drawTimeData(timeData));
}

getAudio();
