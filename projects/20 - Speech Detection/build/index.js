const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
let p;
const addParagraph = () => {
    p = document.createElement('p');
    const words = document.querySelector('.words');
    words.appendChild(p);
};
addParagraph();
recognition.addEventListener('result', (e) => {
    const transcript = Array.from(e.results)
        .map((res) => res[0].transcript)
        .join('');
    p.textContent = transcript;
    if (e.results[0].isFinal) {
        addParagraph();
    }
});
recognition.addEventListener('end', recognition.start);
recognition.start();
