const videos = Array.from(document.querySelectorAll('li'));
const calcTotalTime = (videos) => {
    let totalHours = 0;
    let totalMinutes = 0;
    let totalSeconds = 0;
    for (let video of videos) {
        const time = video.dataset.time;
        const [minutes, seconds] = time.split(':').map(parseFloat);
        totalSeconds += minutes * 60 + seconds;
    }
    totalHours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    totalMinutes = Math.floor(totalSeconds / 60);
    totalSeconds %= 60;
    return `Total time is ${totalHours} hours, ${totalMinutes} minutes and ${totalSeconds} seconds`;
};
console.log(calcTotalTime(videos));
