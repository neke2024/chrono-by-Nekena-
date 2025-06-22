let [heures, minute, seconds, milliseconds] = [0, 0, 0, 0];
const display = document.getElementById('display');
let timer = null;

function stopWath() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minute++;
            if (minute === 60) {
                minute = 0;
                heures++;
            }
        }
    }

    let h = heures < 10 ? "0" + heures : heures;
    let min = minute < 10 ? "0" + minute : minute;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds.toString().padStart(3, "0");
    display.innerText = `${h} h : ${min} min : ${s} sec : ${ms} ms`;
}

const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

start_btn.addEventListener('click', function () {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWath, 10);
    stop_btn.style.display = "block";
    this.style.display = "none";
});

stop_btn.addEventListener('click', function () {
    start_btn.style.display = "block";
    stop_btn.style.display = "none";
    clearInterval(timer);
    timer = null;
});

reset_btn.addEventListener('click', () => {
    start_btn.style.display = "block";
    stop_btn.style.display = "none";
    clearInterval(timer);
    timer = null;
    [heures, minute, seconds, milliseconds] = [0, 0, 0, 0];
    display.innerText = `00 h : 00 min : 00 sec : 000`
    start_btn.classList.remove("activer");
})