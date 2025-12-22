const timerElement = document.getElementById('timer');
let seconds = parseInt(timerElement.textContent);

const countdown = setInterval(() => {
    seconds--;
    timerElement.textContent = seconds;
    
    if (seconds <= 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе!');
    }
}, 1000);