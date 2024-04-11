const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]') as HTMLSelectElement;
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak') as HTMLButtonElement;
const stopButton = document.querySelector('#stop') as HTMLButtonElement;
