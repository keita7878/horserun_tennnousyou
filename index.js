let countdown = 3;
let raceInterval;
const countdownElement = document.getElementById('countdown');
const distanceElement = document.getElementById('distance');
const horses = document.querySelectorAll('.horse');
const startBtn = document.getElementById('start-btn');
const endBtn = document.getElementById('end-btn');
const resultBtn = document.getElementById('result-btn');

startBtn.addEventListener('click', startCountdown);
endBtn.addEventListener('click', endRace);
resultBtn.addEventListener('click', showResults);

function startCountdown() {
    countdown = 3;
    countdownElement.textContent = countdown;
    countdownElement.style.display = 'block';
    startBtn.disabled = true;
    endBtn.disabled = false;
    resultBtn.disabled = true;
    const countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            countdownElement.style.display = 'none';
            startRace();
        }
    }, 1000);
}

function startRace() {
    let distance = 1000;
    raceInterval = setInterval(() => {
        horses.forEach(horse => {
            const currentLeft = parseFloat(horse.style.left);
            const randomSpeed = Math.random() * 30;
            const randomDirection = Math.random() > 0.5 ? 1 : -1;
            horse.style.left = currentLeft + randomSpeed + 'px';
            const currentTop = parseFloat(horse.style.top);
            const randomVerticalMove = (Math.random() - 0.5) * 5;          //上下のランダム移動
            horse.style.top = Math.min(Math.max(currentTop + randomVerticalMove, 0), 160) + 'px';
        });
        distance -= 25;
        distanceElement.textContent = `残り距離: ${distance}m`;
        if (distance <= 0) {
            clearInterval(raceInterval);
            endRace();
        }
    }, 500);
}

function endRace() {
    clearInterval(raceInterval);
    endBtn.disabled = true;
    resultBtn.disabled = false;
}

function showResults() {
    const positions = Array.from(horses).map(horse => ({
        id: horse.id,
        position: parseFloat(horse.style.left)
    }));
    positions.sort((a, b) => b.position - a.position);
    let results = '順位:\n';
    positions.forEach((pos, index) => {
        results += `${index + 1}位: ${pos.id}\n`;
    });
    window.open('results.html?results=' + encodeURIComponent(results), '_blank');
}