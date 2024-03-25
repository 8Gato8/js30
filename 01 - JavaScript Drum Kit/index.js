window.addEventListener('keydown', (event) => {
  const keyCode = event.keyCode;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;
  const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
  keyElement.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
});

window.addEventListener('keyup', (event) => {
  const keyCode = event.keyCode;
  const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
  keyElement.classList.remove('playing');
});
