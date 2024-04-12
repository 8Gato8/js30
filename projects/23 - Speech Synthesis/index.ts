const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]') as HTMLSelectElement;

const textArea = document.querySelector('[name="text"]') as HTMLTextAreaElement;
const options = document.querySelectorAll('[type="range"], [name="text"]');

const speakButton = document.querySelector('#speak') as HTMLButtonElement;
const stopButton = document.querySelector('#stop') as HTMLButtonElement;

msg.text = textArea.value;

const populateVoices = (event: Event) => {
  const currentTarget = event.currentTarget as SpeechSynthesis;
  const voices = currentTarget.getVoices();

  const voicesOptions = voices
    .map(
      (voice) =>
        `<option value=${voice.name.substring(7)}>${voice.name.substring(7)}
        </option>`,
    )
    .join('');

  voicesDropdown.innerHTML = voicesOptions;
};

const setVoice = (event: Event) => {
  const target = event.target as HTMLOptionElement;
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
