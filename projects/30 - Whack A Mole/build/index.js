const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp;
const randomTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};
const randomHole = (holes) => {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if (lastHole === hole)
        return randomHole(holes);
    lastHole = hole;
    return hole;
};
const peep = () => {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp)
            peep();
    }, time);
};
