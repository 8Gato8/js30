window.addEventListener('keydown', (event) => {
  const key = event.key.toLocaleLowerCase();
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  if (!audio) return;
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  keyElement.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
});

window.addEventListener('keyup', (event) => {
  const key = event.key.toLocaleLowerCase();
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  if (keyElement) {
    keyElement.classList.remove('playing');
  }
});
