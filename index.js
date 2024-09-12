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
            const randomSpeed = Math.random() * 25; // 馬のスピード
            horse.style.left = currentLeft + randomSpeed + 'px';

            const currentTop = parseFloat(horse.style.top);
            let randomVerticalMove;

            if (horse.id === "ゴールドシップ") {
                //ゴールドシップだけランダム移動を激しくする
                randomVerticalMove = (Math.random() - 0.5) * 50; //激しく移動
            } else {
                randomVerticalMove = (Math.random() - 0.5) * 4; //他の馬は通常の移動
            }

            horse.style.top = Math.min(Math.max(currentTop + randomVerticalMove, 0), 600) + 'px'; // 上下の最大値
        });
        distance -= 10;
        distanceElement.textContent = `残り距離: ${distance}m`;
        if (distance <= 0) {
            clearInterval(raceInterval);
            endRace();
        }
    }, 100);
}


function endRace() {
    clearInterval(raceInterval);
    endBtn.disabled = true;
    resultBtn.disabled = false;
}

function showResults() {
    const positions = Array.from(horses).map(horse => ({
        id: horse.id,
        number: horse.getAttribute('number'), //'number' 属性を取得
        position: parseFloat(horse.style.left)
    }));
    positions.sort((a, b) => b.position - a.position);
    
    let results = '着順 馬番 馬名\n';
    positions.forEach((pos, index) => {
        //スペースを追加して桁を揃える
        let rank = (index + 1).toString().padStart(2, ' ');
        results += `${rank}着: ${pos.number}, ${pos.id}\n`;
    });

    window.open('results.html?results=' + encodeURIComponent(results), '_blank');
}