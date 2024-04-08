const video = document.querySelector('.player') as HTMLVideoElement;
const canvas = document.querySelector('.photo') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const strip = document.querySelector('.strip') as HTMLDivElement;
const snap = document.querySelector('.snap') as HTMLAudioElement;

type TImageData<T> = (pixels: T) => T;

const getVideo = async () => {
  try {
    const localMediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    video.srcObject = localMediaStream;
    video.play();
  } catch (err) {
    console.error(err);
  }
};

const paintToCanvas = () => {
  const width = video.clientWidth;
  const height = video.clientHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    /* let pixels = ctx.getImageData(0, 0, width, height);
    pixels = rgbSplit(pixels);
    ctx.globalAlpha = 0.1
    ctx.putImageData(pixels, 0, 0); */
  }, 16);
};

const takePhoto = () => {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'me');
  link.textContent = 'Download image';

  link.innerHTML = `<img src=${data}>`;

  strip.insertBefore(link, strip.firstChild);
};

const redEffect: TImageData<ImageData> = (pixels) => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] += 100;
    pixels.data[i + 1] -= 50;
    pixels.data[i + 2] *= 0.5;
  }
  return pixels;
};

const rgbSplit: TImageData<ImageData> = (pixels) => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i];
    pixels.data[i + 100] = pixels.data[i + 1];
    pixels.data[i - 150] = pixels.data[i + 2];
  }
  return pixels;
};

video.addEventListener('canplay', paintToCanvas);

getVideo();
