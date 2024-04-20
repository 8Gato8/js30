const timeLeftDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('.timer__button');
const form = document.querySelector('form');
const input = document.querySelector('input');
let countdown;
const timer = (seconds) => {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
};
const displayTimeLeft = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const secondsToDisplay = remainderSeconds < 10 ? `0${remainderSeconds}` : remainderSeconds;
    const display = `${mins}:${secondsToDisplay}`;
    timeLeftDisplay.textContent = display;
    document.title = display;
};
const displayEndTime = (timestamp) => {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const mins = end.getMinutes();
    const minsToDisplay = mins < 10 ? `0${mins}` : mins;
    endTimeDisplay.textContent = `Be back at ${hour}:${minsToDisplay}`;
};
const handleButtonClick = (e) => {
    const target = e.target;
    const time = +target.dataset.time;
    timer(time);
};
const handleInput = (e) => {
    e.preventDefault();
    const time = +input.value * 60;
    if (!time)
        return;
    timer(time);
};
buttons.forEach((button) => button.addEventListener('click', handleButtonClick));
form.addEventListener('submit', handleInput);
