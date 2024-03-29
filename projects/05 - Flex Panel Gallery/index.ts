const panels = document.querySelectorAll('.panel') as NodeListOf<HTMLDivElement>;

const toggleOpen = (event: MouseEvent) => {
  console.log(event.detail);
  if (event.detail < 2) {
    const target = event.target as HTMLElement;
    target.classList.toggle('open');
  }
};

const toggleActive = (event: TransitionEvent) => {
  if (event.propertyName.includes('flex')) {
    const target = event.target as HTMLDivElement;
    target.classList.toggle('open-active');
  }
};

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive));
