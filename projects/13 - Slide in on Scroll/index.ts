function debounce(func: (e: Event) => void, wait = 20, immediate = true) {
  let timeout: undefined | number | null;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in') as NodeListOf<HTMLImageElement>;

for (let sliderImage of sliderImages) {
  const slideInAt = sliderImage.offsetTop - sliderImage.height;
  const imageBottom = sliderImage.offsetTop + sliderImage.height * 2;

  sliderImage.dataset.slideInAt = slideInAt.toString();
  sliderImage.dataset.imageBottom = imageBottom.toString();
}

const checkSlide = () => {
  for (let sliderImage of sliderImages) {
    const isShown =
      window.scrollY >= parseInt(sliderImage.dataset.slideInAt) &&
      window.scrollY < parseInt(sliderImage.dataset.imageBottom);

    sliderImage.classList.toggle('active', isShown);
  }
};

window.addEventListener('scroll', debounce(checkSlide, 10));
