const holes = document.querySelectorAll('.hole') as NodeListOf<HTMLDivElement>;
const scoreBoard = document.querySelector('.score') as HTMLSpanElement;
const moles = document.querySelectorAll('.mole') as NodeListOf<HTMLDivElement>;

type TRandomTime<T> = (min: T, max: T) => T;

let lastHole: HTMLDivElement;
let timeUp: boolean;

const randomTime: TRandomTime<number> = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const randomHole = (holes: NodeListOf<HTMLDivElement>) => {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if (lastHole === hole) return randomHole(holes);
  lastHole = hole;
  return hole;
};

const peep = () => {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
};

const startGame = () => {
  scoreBoard.textContent = '0';
  timeUp = false;
  peep();
  setTimeout(() => (timeUp = true), 10000);
};
