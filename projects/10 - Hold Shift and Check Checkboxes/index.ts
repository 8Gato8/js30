const checkboxes = document.querySelectorAll('input');

let lastChecked: HTMLInputElement;

const handleCheck = (e: MouseEvent) => {
  const target = e.target as HTMLInputElement;

  let inBetween = false;
  if (e.shiftKey && target.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = target;
};

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));
