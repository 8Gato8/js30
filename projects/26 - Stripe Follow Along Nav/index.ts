const triggers = document.querySelectorAll('.cool > li') as NodeListOf<HTMLLIElement>;
const background = document.querySelector('.dropdownBackground') as HTMLDivElement;
const nav = document.querySelector('.top') as HTMLElement;
const dropdowns = document.querySelectorAll('.dropdown') as NodeListOf<HTMLDivElement>;

function handleEnter(e: MouseEvent) {
  const currentTarget = e.currentTarget as HTMLLIElement;
  currentTarget.classList.add('trigger-enter');
  setTimeout(() => {
    if (currentTarget.classList.contains('trigger-enter')) {
      currentTarget.classList.add('trigger-enter-active');
    }
  }, 150);
  background.classList.add('open');

  let dropdown: HTMLDivElement;
  dropdowns.forEach((d) => {
    if (currentTarget.contains(d)) {
      dropdown = d;
    }
  });
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
    height: dropdownCoords.height,
    width: dropdownCoords.width,
  };

  background.style.setProperty('top', `${coords.top}px`);
  background.style.setProperty('left', `${coords.left}px`);
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
}

function handleLeave(e: MouseEvent) {
  const currentTarget = e.currentTarget as HTMLLIElement;
  currentTarget.classList.remove('trigger-enter-active', 'trigger-enter');
  background.classList.remove('open');
}

triggers.forEach((trigger) => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach((trigger) => trigger.addEventListener('mouseleave', handleLeave));
