const bandsElement = document.querySelector('#bands');
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
const strip = (str) => str.replace(/^(a |an |the )/i, '').trim();
const sortArray = (bands) => bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
const createBandsList = (bands, bandsElement) => {
    const sortedBandsArray = sortArray(bands);
    sortedBandsArray.forEach((b) => {
        bandsElement.insertAdjacentHTML(`beforeend`, `<li>${b}</li>`);
    });
};
createBandsList(bands, bandsElement);
