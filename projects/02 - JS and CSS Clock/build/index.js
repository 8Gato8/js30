"use strict";
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
function setDate() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    [hourHand, minHand, secondHand].forEach((el) => {
        if (seconds === 0) {
            el.style.transition = 'none';
        }
    });
    const hoursDegrees = 30 * hours + 0.5 * minutes;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    const minutesDegrees = minutes * 6 + 0.1 * seconds;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    const secondsDegrees = seconds * 6;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}
setInterval(setDate, 1000);
