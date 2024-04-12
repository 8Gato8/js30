const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const textArea = document.querySelector('[name="text"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = textArea.value;
const populateVoices = (event) => {
    const currentTarget = event.currentTarget;
    const voices = currentTarget.getVoices();
    const voicesOptions = voices
        .map((voice) => `<option value=${voice.name.substring(7)}>${voice.name.substring(7)}
        </option>`)
        .join('');
    voicesDropdown.innerHTML = voicesOptions;
};
const setVoice = (event) => {
    const target = event.target;
    msg.voice = voices.find((voice) => voice.name === target.value);
    toggle();
};
const toggle = (startOver = true) => {
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
};
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
