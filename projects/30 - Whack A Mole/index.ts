const holes = document.querySelectorAll('.hole') as NodeListOf<HTMLDivElement>;
const scoreBoard = document.querySelector('.score') as HTMLSpanElement;
const moles = document.querySelectorAll('.mole') as NodeListOf<HTMLDivElement>;

type TRandomTime<T> = (min: T, max: T) => T;

let lastHole: HTMLDivElement;

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
