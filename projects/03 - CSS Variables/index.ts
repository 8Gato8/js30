const inputs = document.querySelectorAll('.controls input') as NodeListOf<HTMLInputElement>;

const handleUpdate = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const suffix = target.dataset.sizing ?? '';

  const value = target.value + suffix;
  const name = target.name;

  document.documentElement.style.setProperty(`--${name}`, value);
};

inputs.forEach((input) => input.addEventListener('input', handleUpdate));
