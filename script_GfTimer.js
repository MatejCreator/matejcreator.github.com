// Select DOM elements
const timeDisplay = document.getElementById('timeDisplay');
const startButton = document.getElementById('startTimer');
const resetButton = document.getElementById('resetTimer');

let timerInterval;
const STORAGE_KEY = 'gfTimerStartTime';

// Function to update the timer display
function updateDisplay() {
    const storedTime = localStorage.getItem(STORAGE_KEY);
    if (!storedTime) {
        timeDisplay.textContent = "00:00:00";
        return;
    }
    const startTime = parseInt(storedTime, 10);
    const now = Date.now();
    const elapsed = now - startTime;

    const hours = Math.floor(elapsed / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    // Format time as hh:mm:ss with leading zeros
    const formattedTime =
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);

    timeDisplay.textContent = formattedTime;
}

// Function to start (or resume) the timer
function startTimer() {
    // If no stored time exists, set it to now.
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, Date.now());
    }
    // Clear any existing interval before starting a new one
    if (timerInterval) clearInterval(timerInterval);

    // Update immediately and then every second
    updateDisplay();
    timerInterval = setInterval(updateDisplay, 1000);
}

// Function to reset the timer
function resetTimer() {
    localStorage.removeItem(STORAGE_KEY);
    if (timerInterval) clearInterval(timerInterval);
    timeDisplay.textContent = "00:00:00";
}

// Event listeners for the buttons
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

// On page load, if a start time exists, resume the timer.
if (localStorage.getItem(STORAGE_KEY)) {
    startTimer();
}
