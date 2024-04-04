"use strict";
const pressed = [];
const secretCode = 'wesbos';
window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(0, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        console.log("That's it");
    }
});
