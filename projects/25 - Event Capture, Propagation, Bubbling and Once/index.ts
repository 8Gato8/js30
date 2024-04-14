const divs = document.querySelectorAll('div');

const log = (event: MouseEvent) => {
  const currentTarget = event.currentTarget as HTMLDivElement;
  console.log('current', currentTarget);
};

divs.forEach((div) => div.addEventListener('click', log, { once: true }));
