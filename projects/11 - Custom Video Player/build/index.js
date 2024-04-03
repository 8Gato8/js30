"use strict";
const player = document.querySelector('.player');
const video = document.querySelector('video');
const toggleButton = document.querySelector('.toggle');
const progressBar = document.querySelector('.progress');
const progressBarFilled = document.querySelector('.progress__filled');
const fullscreenButton = document.querySelector('.player__button_fullscreen');
let isMouseDown = false;
const handleTogglePlay = (e) => {
    const target = e.target;
    if (!(target === video || target === toggleButton))
        return;
    if (video.paused) {
        toggleButton.textContent = '◼';
        video.play();
    }
    else {
        toggleButton.textContent = '▶';
        video.pause();
    }
};
const handleSkip = (e) => {
    const target = e.target;
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
const slide = (e) => {
    const target = e.target;
    video[target.name] = +target.value;
};
const handleProgress = () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBarFilled.style.flexBasis = `${percent}%`;
};
const scrub = (e) => {
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
player.addEventListener('mousemove', (e) => isMouseDown && slide(e));
player.addEventListener('change', slide);
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousedown', handleMouseDown);
progressBar.addEventListener('mouseup', handleMouseUp);
progressBar.addEventListener('mousemove', (e) => isMouseDown && scrub(e));
video.addEventListener('timeupdate', handleProgress);
fullscreenButton.addEventListener('click', openFullscreen);
