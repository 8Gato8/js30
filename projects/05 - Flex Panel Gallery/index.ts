const panels = document.querySelector('.panels') as HTMLDivElement;

const toggleOpen = (event: MouseEvent) => {
  if (event.detail < 2) {
    const target = event.target as HTMLDivElement;

    if (target.tagName === 'P') {
      target.parentElement?.classList.toggle('open');
    } else {
      target.classList.toggle('open');
    }
  }
};

const toggleActive = (event: TransitionEvent) => {
  if (event.propertyName.includes('flex')) {
    const target = event.target as HTMLDivElement;

    if (target.tagName === 'P') {
      target.parentElement?.classList.toggle('open-active');
    } else {
      target.classList.toggle('open-active');
    }
  }
};

panels.addEventListener('click', toggleOpen);
panels.addEventListener('transitionend', toggleActive);
