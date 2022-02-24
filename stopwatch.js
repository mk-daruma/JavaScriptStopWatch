// HTML上のIdをElementオブジェクトにする
const Time= document.getElementById("Time");
const Start= document.getElementById("Start");
const Stop= document.getElementById("Stop");
const Reset= document.getElementById("Reset");

// 関数宣言
let hundred= 0;
let ten= 0;
let one= 0;
let mill= 0;
let interval;

// timerの関数宣言と定義を同時にするためにアロー関数を使用。
let timer = () => {
  mill++;
  // 1秒経ったら0.1の位を初期化
  if (mill % 10 === 0){ 
    one++; 
    mill = 0; /*millは０に戻る*/
      if (one % 10 === 0) {
        ten++;
        one = 0;
        if (ten % 10 === 0) {
          hundred++;
          ten = 0;
      }
    }
  }
  // 数字の表示
  Time.innerHTML = hundred + ':' + ten + ":" + one + ":" + mill;
};


// スタートボタン
Start.addEventListener("click",function(){
  interval = setInterval(timer,100);
  Start.disabled = true;
  Stop.disabled = false;
  Reset.disabled = true;
});

// ストップボタン
Stop.addEventListener("click",function(){
  clearInterval(interval);
  Start.disabled = false;
  Stop.disabled = true;
  Reset.disabled = false;
});

// リセットボタン
Reset.addEventListener("click",function() {
  Time.innerHTML = '0:0:0:0';
  hundred=0;
  ten=0;
  one=0;
  mill=0;
  Start.disabled = false;
  Stop.disabled = true;
  Reset.disabled = true;
});