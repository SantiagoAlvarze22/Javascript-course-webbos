// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.
const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = canvas.getContext('2d');

// creating a new face detector
const faceDetector = new window.FaceDetector();
console.log(video, canvas, faceCanvas, faceDetector);

// write a function that will populate the users video
async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1200, height: 720 },
  });
  video.srcObject = stream;
  await video.play();
  // size the canvases to be the sabe size as the video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
}

populateVideo().then(detect);
