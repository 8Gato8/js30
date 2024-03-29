"use strict";
const panels = document.querySelectorAll('.panel');
const toggleOpen = (event) => {
    console.log(event.detail);
    if (event.detail < 2) {
        const target = event.target;
        target.classList.toggle('open');
    }
};
const toggleActive = (event) => {
    if (event.propertyName.includes('flex')) {
        const target = event.target;
        target.classList.toggle('open-active');
    }
};
panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive));
