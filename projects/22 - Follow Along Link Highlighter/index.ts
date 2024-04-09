const links = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

const highlightLink = (e: MouseEvent) => {
  const link = e.target as HTMLAnchorElement;
  const linkCoords = link.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  let { width, height, top, left } = coords;

  highlight.style.width = `${width}px`;
  highlight.style.height = `${height}px`;
  highlight.style.transform = `translate(${left}px, ${top}px)`;
};

links.forEach((l) => {
  l.addEventListener('mouseenter', highlightLink);
});
