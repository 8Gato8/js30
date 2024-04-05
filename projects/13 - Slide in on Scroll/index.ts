function debounce(func: any, wait = 20, immediate = true) {
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

const checkSlide = () => {
  sliderImages.forEach((sliderImage) => {
    const slideInAt = sliderImage.offsetTop - sliderImage.height;
    const imageBottom = sliderImage.offsetTop + sliderImage.height * 2;

    const isShown = window.scrollY >= slideInAt && window.scrollY < imageBottom;

    if (isShown) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', debounce(checkSlide, 10));
