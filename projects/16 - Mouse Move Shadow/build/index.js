const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;
const shadow = (e) => {
    const target = e.target;
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { clientX: x, clientY: y } = e;
    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
};
hero.addEventListener('mousemove', shadow);
