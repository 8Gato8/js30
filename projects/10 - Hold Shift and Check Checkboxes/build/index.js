"use strict";
const checkboxes = document.querySelectorAll('input');
let lastChecked;
const handleCheck = (e) => {
    const target = e.target;
    let inBetween = false;
    if (e.shiftKey && target.checked) {
        checkboxes.forEach((checkbox) => {
            if (checkbox === target || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = target;
};
checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));
