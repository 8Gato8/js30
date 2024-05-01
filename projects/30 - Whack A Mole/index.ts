const holes = document.querySelectorAll('.hole') as NodeListOf<HTMLDivElement>;
const scoreBoard = document.querySelector('.score') as HTMLSpanElement;
const moles = document.querySelectorAll('.mole') as NodeListOf<HTMLDivElement>;

type TRandomTime<T> = (min: T, max: T) => T;
/* type TRandomHole */

const randomTime: TRandomTime<number> = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const randomHole = (holes: NodeListOf<HTMLDivElement>) => {
  const index = Math.random() * holes.length;
  return holes[index];
};
