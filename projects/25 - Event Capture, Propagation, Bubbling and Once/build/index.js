const divs = document.querySelectorAll('div');
const log = (event) => {
    const currentTarget = event.currentTarget;
    const target = event.target;
    console.log('current', currentTarget /* , 'target', target */);
};
divs.forEach((div) => div.addEventListener('click', log, { once: true }));
