const slider = document.querySelector('.items') as HTMLDivElement;
let isDown = false;
let startX = 0;
let scrollLeft = 0;

slider.addEventListener('mousedown', (e: MouseEvent) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e: MouseEvent) => {
  if (!isDown) return;
  e.preventDefault();
  const newStartX = e.pageX - slider.offsetLeft;
  const walk = newStartX - startX;
  slider.scrollLeft = scrollLeft - walk;
  console.log(scrollLeft, walk);
});
