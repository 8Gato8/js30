const player = document.querySelector('.player') as HTMLDivElement;
const video = document.querySelector('video') as VideoType;
const toggleButton = document.querySelector('.toggle') as HTMLButtonElement;
const progressBar = document.querySelector('.progress') as HTMLDivElement;
const progressBarFilled = document.querySelector('.progress__filled') as HTMLDivElement;
const fullscreenButton = document.querySelector('.player__button_fullscreen') as HTMLButtonElement;

interface VideoInterface {
  [index: string]: string | number;
}

type VideoType = VideoInterface & HTMLVideoElement;

let isMouseDown = false;

const handleTogglePlay = (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  if (!(target === video || target === toggleButton)) return;

  if (video.paused) {
    toggleButton.textContent = '◼';
    video.play();
  } else {
    toggleButton.textContent = '▶';
    video.pause();
  }
};

const handleSkip = (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  if (target.dataset.skip) {
    const value = +target.dataset.skip;
    video.currentTime += value;
  }
};

const handleMouseDown = () => {
  isMouseDown = true;
};

const handleMouseUp = () => {
  isMouseDown = false;
};

const slide = (e: Event) => {
  const target = e.target as HTMLElement & HTMLInputElement;

  video[target.name] = +target.value;
};

const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBarFilled.style.flexBasis = `${percent}%`;
};

const scrub = (e: MouseEvent) => {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};

const openFullscreen = () => {
  player.classList.toggle('player_fullscreen');
};

player.addEventListener('click', handleTogglePlay);
player.addEventListener('click', handleSkip);

player.addEventListener('mousedown', handleMouseDown);
player.addEventListener('mouseup', handleMouseUp);
player.addEventListener('mousemove', (e: MouseEvent) => isMouseDown && slide(e));
player.addEventListener('change', slide);

progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousedown', handleMouseDown);
progressBar.addEventListener('mouseup', handleMouseUp);
progressBar.addEventListener('mousemove', (e: MouseEvent) => isMouseDown && scrub(e));

video.addEventListener('timeupdate', handleProgress);

fullscreenButton.addEventListener('click', openFullscreen);
