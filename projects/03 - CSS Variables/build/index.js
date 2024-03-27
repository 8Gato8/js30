"use strict";
const inputs = document.querySelectorAll('.controls input');
const handleUpdate = (event) => {
    var _a;
    const target = event.target;
    const suffix = (_a = target.dataset.sizing) !== null && _a !== void 0 ? _a : '';
    const value = target.value + suffix;
    const name = target.name;
    document.documentElement.style.setProperty(`--${name}`, value);
};
inputs.forEach((input) => input.addEventListener('input', handleUpdate));
