let startTime;
let elapsedTime = 0;
let timerInterval;

const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function updateTime() {
  elapsedTime = Date.now() - startTime;
  timeDisplay.textContent = timeToString(elapsedTime);
}

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let formattedHH = hh.toString().padStart(2, '0');
  let formattedMM = mm.toString().padStart(2, '0');
  let formattedSS = ss.toString().padStart(2, '0');

  return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

startBtn.addEventListener('click', () => {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 1000);
  startBtn.disabled = true;
});

pauseBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  startBtn.disabled = false;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  timeDisplay.textContent = '00:00:00';
  elapsedTime = 0;
  laps.innerHTML = '';
  startBtn.disabled = false;
});

lapBtn.addEventListener('click', () => {
  const lapTime = timeToString(elapsedTime);
  const lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  laps.appendChild(lapItem);
});
