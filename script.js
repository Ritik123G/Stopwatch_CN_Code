const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('laps');

let startTime = 0;
let intervalId = null;
let lapCounter = 1;

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000;
    timeDisplay.textContent = elapsedTime.toFixed(2);
}

startBtn.addEventListener('click', () => {
    if (!intervalId) {
        startTime = Date.now() - (parseFloat(timeDisplay.textContent) * 1000);
        intervalId = setInterval(updateTimer, 10);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    timeDisplay.textContent = '00:00.00';
    lapCounter = 1;
    lapsList.innerHTML = '';
});

lapBtn.addEventListener('click', () => {
    if (intervalId) {
        const lapTime = parseFloat(timeDisplay.textContent).toFixed(2);
        const lapItem = document.createElement('li');
        lapItem.classList.add('lap-item');
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}s`;
        lapsList.appendChild(lapItem);
        lapCounter++;
    }
});

resetBtn.click(); // Initialize the timer display

