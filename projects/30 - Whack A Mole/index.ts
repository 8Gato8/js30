const holes = document.querySelectorAll('.hole') as NodeListOf<HTMLDivElement>;
const scoreBoard = document.querySelector('.score') as HTMLSpanElement;
const moles = document.querySelectorAll('.mole') as NodeListOf<HTMLDivElement>;

type IRandomTime<T> = (min: T, max: T) => T;

const randomTime: IRandomTime<number> = (min, max) => {
  return Math.random() * (max - min) + min;
};
