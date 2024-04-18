const video = document.querySelector('video');
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
let isMouseDown = false;
const min = 0.4;
const max = 4;
const calculateNumbers = (e) => {
    const y = e.pageY - speed.offsetTop;
    const percent = y / speed.offsetHeight;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    return { height, playbackRate };
};
const applyNewStyles = (height, playbackRate) => {
    bar.style.height = height;
    bar.textContent = `${playbackRate.toFixed(2)}x`;
    video.playbackRate = +playbackRate.toFixed(2);
};
const handleMouseDown = () => (isMouseDown = true);
const handleMouseUp = () => (isMouseDown = false);
const handleMouseMove = (e) => {
    if (!isMouseDown)
        return;
    const { height, playbackRate } = calculateNumbers(e);
    applyNewStyles(height, playbackRate);
};
const handleMouseClick = (e) => {
    const { height, playbackRate } = calculateNumbers(e);
    applyNewStyles(height, playbackRate);
};
speed.addEventListener('mousedown', handleMouseDown);
speed.addEventListener('mouseup', handleMouseUp);
speed.addEventListener('mousemove', handleMouseMove);
speed.addEventListener('click', handleMouseClick);
