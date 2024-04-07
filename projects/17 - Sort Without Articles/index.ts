type TModifyArray<T> = (bands: T[]) => T[];
type TStrip<T> = (str: T) => T;
type TCreateBandsList<T> = (bands: T[], bandsElement: HTMLUListElement) => void;

const bandsElement = document.querySelector('#bands') as HTMLUListElement;

const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

const strip: TStrip<string> = (str) => str.replace(/^(a |an |the )/i, '').trim();

const sortArray: TModifyArray<string> = (bands) =>
  bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

const createBandsList: TCreateBandsList<string> = (bands, bandsElement) => {
  const sortedBandsArray = sortArray(bands);
  sortedBandsArray.forEach((b) => {
    bandsElement.insertAdjacentHTML(`beforeend`, `<li>${b}</li>`);
  });
};

createBandsList(bands, bandsElement);
