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
    let distance = 1000;                            // レースの総距離（m）。レースが進行するにつれて減少する。
    let slowDownOccurred = false;                   // 特定の馬（例: オルフェーヴル）が減速を始めたかどうかを追跡するフラグ。
    let slowDownStartTime = null;                   // 減速が始まった時刻を記録するための変数。
    const halfScreenWidth = window.innerWidth / 2;  // 画面の半分の幅を取得。UIの描画などに使える。

    let silenceSuzukaStartTime = Date.now();        // レースが始まった瞬間のサイレンススズカのスタート時刻を記録。
    let deepImpactStartTime = Date.now();           // レースが始まった瞬間のディープインパクトのスタート時刻を記録。


    // 一定時間ごとに馬の位置を更新するインターバル処理を開始
    raceInterval = setInterval(() => {
        horses.forEach(horse => {
            const currentLeft = parseFloat(horse.style.left); // 各馬の現在の左方向の位置を取得。
            let randomSpeed = Math.random() * 25;             // 各馬の通常速度を設定。
            
            //1頭目
            if (horse.id === "リバティアイランド") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 3000) {
                    randomSpeed = Math.random() * 23; // 最初の3秒は遅く走る
                } else {
                    randomSpeed = Math.random() * 33; // 3秒後は速く走る
                }
            }

            //2頭目
            if (horse.id === "レーベンスティール") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 5000) {
                    randomSpeed = Math.random() * 28; // 最初の3秒は遅く走る
                } else {
                    randomSpeed = Math.random() * 31; // 3秒後は速く走る
                }
            }

            //3頭目
            if (horse.id === "ドウデュース") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 4000) {
                    randomSpeed = Math.random() * 20; // 最初の4秒は遅く走る
                } else {
                    randomSpeed = Math.random() * 36; // 4秒後は速く走る
                }
            }

            //4頭目
            if (horse.id === "ベラジオオペラ") {
                randomSpeed = Math.random() * 29; // 馬の通常スピード
            }

            //5頭目
            if (horse.id === "ソールオリエンス") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 5000) {
                    randomSpeed = Math.random() * 22; // 最初の5秒は遅く走る
                } else {
                    randomSpeed = Math.random() * 35; // 5秒後は速く走る
                }
            }

            //6頭目
            if (horse.id === "ジャスティンパレス") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 4000) {
                    randomSpeed = Math.random() * 16; // 最初の3秒は遅く走る
                } else {
                    randomSpeed = Math.random() * 37; // 3秒後は速く走る
                }
            }

            //7頭目
            if (horse.id === "タスティエーラ") {
                randomSpeed = Math.random() * 28; // 馬の通常スピード
            }

            //8頭目
            if (horse.id === "ホウオウビスケッツ") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 4000) {
                    randomSpeed = Math.random() * 42; // 最初の4秒は遅く走る
                } else {
                    randomSpeed = Math.random() * 18; // 4秒後は速く走る
                }
            }

            //9頭目
            if (horse.id === "ノースブリッジ") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 5000) {
                    randomSpeed = Math.random() * 33; // 最初の5秒は遅く走る
                } else {
                    randomSpeed = Math.random() * 22; // 5秒後は速く走る
                }
            }

            // 10頭目
            if (horse.id === "ダノンベルーガ") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 5000) {
                    randomSpeed = Math.random() * 19; // 最初の5秒は遅く走る
                } else {
                    randomSpeed = Math.random() * 36; // 5秒後は速く走る
                }
            }

            //11頭目
            if (horse.id === "キングズパレス") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 7000) {
                    randomSpeed = Math.random() * 25; // 最初の7秒は遅く走る
                } else {
                    randomSpeed = Math.random() * 33; // 3秒後は速く走る
                }
            }

            //12頭目
            if (horse.id === "リフレーミング") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 6000) {
                    randomSpeed = Math.random() * 23; // 最初の6秒は遅く走る
                } else {
                    randomSpeed = Math.random() * 33; // 6秒後は速く走る
                }
            }

            // 13頭目
            if (horse.id === "マテンロウスカイ") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 5000) {
                    randomSpeed = Math.random() * 30; // 最初の5秒は速く走る
                } else {
                    randomSpeed = Math.random() * 23; // 5秒後は少し遅くなる
                }
            }

            //14頭目
            if (horse.id === "ステラヴェローチェ") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 5000) {
                    randomSpeed = Math.random() * 22; // 最初の3秒は遅く走る
                } else {
                    randomSpeed = Math.random() * 31; // 3秒後は速く走る
                }
            }

            //15頭目
            if (horse.id === "シルトホルン") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 6000) {
                    randomSpeed = Math.random() * 31; // 最初の6秒は遅く走る
                } else {
                    randomSpeed = Math.random() * 19; // 6秒後は速く走る
                }
            }


            // 16頭目
            if (horse.id === "ニシノレヴナント") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 6000) {
                    randomSpeed = Math.random() * 17; // 最初の6秒は遅く走る
                } else {
                    randomSpeed = Math.random() * 37; // 6秒後は速く走る
                }
            }

            // 17頭目
            if (horse.id === "サトノエルドール") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 4000) {
                    randomSpeed = Math.random() * 15; // 最初の3秒は速く走る
                } else {
                    randomSpeed = Math.random() * 31; // 3秒後は少し遅くなる
                }
            }

//----------------------------------------------------------------------------------------------
            //歴代名馬
            //18頭目
            if (horse.id === "イクイノックス") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 5000) {
                    randomSpeed = Math.random() * 29.5; // 最初の6秒は速く走る
                } else {
                    randomSpeed = Math.random() * 37.5; // 6秒後は少し遅くなる
                }
            }

            if (horse.id === "サイレンススズカ") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 4000) {
                    randomSpeed = Math.random() * 44; // 最初の6秒は速く走る
                } else {
                    randomSpeed = Math.random() * 27; // 6秒後は少し遅くなる
                }
            }

            if (horse.id === "ディープインパクト") {
                const elapsedTime = Date.now() - deepImpactStartTime; // 経過時間を取得
                if (elapsedTime < 6000) {
                    randomSpeed = Math.random() * 21; // 最初の6秒は速く走る
                } else {
                    randomSpeed = Math.random() * 52; // 6秒後は少し遅くなる
                }
            }

//----------------------------------------------------------------------------------------------

            

            horse.style.left = currentLeft + randomSpeed + 'px';

            const currentTop = parseFloat(horse.style.top);
            let randomVerticalMove;

            // ゴールドシップだけランダム移動を激しくする
            if (horse.id === "ゴールドシップ") {
                randomVerticalMove = (Math.random() - 0.5) * 40; // 激しく移動
            } else {
                randomVerticalMove = (Math.random() - 0.5) * 4; // 他の馬は通常の移動
            }

            // 上下移動が画面の範囲外に出ないように制御
            horse.style.top = Math.min(Math.max(currentTop + randomVerticalMove, 0), 600) + 'px'; 
        });

        distance -= 10; // 残りの距離を10m減らす。
        distanceElement.textContent = `残り距離: ${distance}m`; // 残りの距離を表示。

        if (distance <= 0) {
            clearInterval(raceInterval); // 距離が0になったらレースを終了。
            endRace();  // レース終了時の処理を呼び出す。
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
        odds: parseFloat(horse.getAttribute('odds')), // oddsを浮動小数点数として解析
        number: horse.getAttribute('number'), // 'number' 属性
        position: parseFloat(horse.style.left)
    }));

    // 馬の位置を左から右へ進んでいる順に並べ替え
    positions.sort((a, b) => b.position - a.position);

    // 結果表示用の文字列
    let results = '着順  馬番  馬名           オッズ\n';


    // 全馬の順位を表示 (列がきれいに揃うようにフォーマット)
    positions.forEach((horse, index) => {
        let rank = `${index + 1}着`.padEnd(5);      // 着順 (5文字幅に揃える)
        let number = horse.number.padEnd(4);         // 馬番 (4文字幅に揃える)
        let name = horse.id.padEnd(12);              // 馬名 (12文字幅に揃える)
        let odds = `(${horse.odds.toFixed(2)})`.padStart(8);  // オッズ (8文字幅に揃える)

        results += `${rank} ${number} ${name} ${odds}\n`;
    });

    // 区切り線を入れる
    results += '\n-----------------------------\n';

    // 上位3頭の馬を取り出す
    let first = positions[0];
    let second = positions[1];
    let third = positions[2];

    // 単勝のオッズ
    let tansho = first.odds;

    // 3連複のオッズ計算: 1着の馬 * 2着の馬 * 3着の馬 * 0.08
    let trifectaOdds = first.odds * second.odds * third.odds * 0.12;

    // 三連単のオッズ計算: (1着の馬 * 1.3) * (2着の馬 * 1.15) * (3着の馬 * 1.08) * 0.2
    let trioOdds = ((first.odds ** 1.25) * (second.odds ** 1.12) * (third.odds ** 1.05)) * 0.25

    // オッズ情報を追加
    results += '\n--- オッズ情報 ---\n';
    results += `単勝:   ${tansho.toFixed(2)}\n`;
    results += `三連複: ${trifectaOdds.toFixed(2)}\n`;
    results += `三連単: ${trioOdds.toFixed(2)}\n`;

    // 結果を新しいウィンドウで表示
    window.open('results.html?results=' + encodeURIComponent(results), '_blank');
}