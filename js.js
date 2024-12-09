// Display Current Day and Time
function displayDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    alert(`Current Date: ${date}\nCurrent Time: ${time}`);
}
displayDateTime();

// Countdown Timer
function startCountdown(seconds) {
    const countdownElement = document.createElement('div');
    document.body.appendChild(countdownElement);
    let remaining = seconds;

    const timer = setInterval(() => {
        countdownElement.textContent = `Countdown: ${remaining} seconds`;
        remaining--;
        if (remaining < 0) {
            clearInterval(timer);
            countdownElement.textContent = "Time's up!";
        }
    }, 1000);
}
startCountdown(120);

// Math Example
function calculateSquare(number) {
    const result = Math.pow(number, 2);
    console.log(`Square of ${number}: ${result}`);
}
calculateSquare(4);