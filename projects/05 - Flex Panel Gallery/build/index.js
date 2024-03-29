"use strict";
const panels = document.querySelector('.panels');
const toggleOpen = (event) => {
    if (event.detail < 2) {
        const target = event.target;
        if (target.tagName === 'P') {
            target.parentElement?.classList.toggle('open');
        }
        else {
            target.classList.toggle('open');
        }
    }
};
const toggleActive = (event) => {
    if (event.propertyName.includes('flex')) {
        const target = event.target;
        if (target.tagName === 'P') {
            target.parentElement?.classList.toggle('open-active');
        }
        else {
            target.classList.toggle('open-active');
        }
    }
};
panels.addEventListener('click', toggleOpen);
panels.addEventListener('transitionend', toggleActive);
