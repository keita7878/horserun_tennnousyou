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
    let slowDownOccurred = false; // オルフェーヴルの減速が開始されたかどうか
    let slowDownStartTime = null; // 減速が始まった時刻
    const halfScreenWidth = window.innerWidth / 2; // 画面の半分の幅を取得
    
    let silenceSuzukaStartTime = Date.now(); // サイレンススズカのレース開始時刻
    let deepImpactStartTime = Date.now(); // ディープインパクトのレース開始時刻

    raceInterval = setInterval(() => {
        horses.forEach(horse => {
            const currentLeft = parseFloat(horse.style.left);
            let randomSpeed = Math.random() * 25; // 馬の通常スピード
            
            // 1頭目 (サイレンススズカ) の加速・減速ロジック
            if (horse.id === "サイレンススズカ") {
                const elapsedTime = Date.now() - silenceSuzukaStartTime; // 経過時間を取得
                if (elapsedTime < 2000) {
                    randomSpeed = Math.random() * 55; // 最初の2秒は速く走る
                } else {
                    randomSpeed = Math.random() * 20; // 2秒後は少し遅くなる
                }
            }

            // 18頭目 (オルフェーヴル) の減速・加速ロジック
            if (horse.id === "オルフェーヴル") {
                if (!slowDownOccurred && currentLeft > halfScreenWidth) {
                    randomSpeed = Math.random() * 5; // 画面の半分で減速させる
                    slowDownOccurred = true; // 減速開始フラグを立てる
                    slowDownStartTime = Date.now(); // 減速開始の時刻を記録
                } else if (slowDownOccurred) {
                    const elapsedTime = Date.now() - slowDownStartTime; // 減速開始からの経過時間
                    if (elapsedTime < 1500) {
                        randomSpeed = Math.random() * 5; // 1.5秒間は減速したまま
                    } else {
                        randomSpeed = Math.random() * 40; // 1.5秒経過後に加速
                    }
                }
            }

            // 2頭目 (ディープインパクト) の加速・減速ロジック
            if (horse.id === "ディープインパクト") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 3500) {
                    randomSpeed = Math.random() * 10; // 最初の4秒は遅く走る
                } else {
                    randomSpeed = Math.random() * 35; // 4秒後は速く走る
                }
            }

            horse.style.left = currentLeft + randomSpeed + 'px';

            const currentTop = parseFloat(horse.style.top);
            let randomVerticalMove;

            // ゴールドシップだけランダム移動を激しくする
            if (horse.id === "ゴールドシップ") {
                randomVerticalMove = (Math.random() - 0.5) * 50; // 激しく移動
            } else {
                randomVerticalMove = (Math.random() - 0.5) * 4; // 他の馬は通常の移動
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