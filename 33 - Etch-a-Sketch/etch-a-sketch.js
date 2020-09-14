// select the elements on the page, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// setup our canvas for drawning

// gerneratiion a ramdon position for the poitn
// make a variable called height and width from same properties on our canvas
const { width, height } = canvas;

// create random x and y starting points on the canvas
const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start drawning
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function

// write a handle for the keys

// clear / shke function

// listen for arrow keys
