type THero = HTMLDivElement;
type TText = HTMLHeadingElement;

const hero: THero = document.querySelector('.hero');
const text: TText = hero.querySelector('h1');
const walk = 100;

const shadow = (e: MouseEvent) => {
  const target = e.target as THero;
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { clientX: x, clientY: y } = e;

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
};
hero.addEventListener('mousemove', shadow);
