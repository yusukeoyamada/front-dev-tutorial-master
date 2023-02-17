// イベントとは、webサイト上で行われるあらゆるアクションのこと
  // ボタンクリック、ホバーするなど
    // その状態を監視しているリスナーのことを、イベントリスナーという
      // イベントリスナーに関数を登録しておくことで、紐付けられたイベントが起こった時に、登録されている関数が呼ばれる。
        // (1)これが基本的なイベント時に発火する関数の登録の方法

const btn = document.querySelector('#btn')
const changeColor = function() {
  // alert('hello');

  // グローバルスコープの上記「btn」を使用した場合
  // btn.style.color = 'red';

  // addEventListenerには、btnが登録されているので、「this = btn」と認識される
    // addEventListenerに登録された関数内では、登録されたhtmlのDOM(例) btn)が、thisに格納された状態で渡ってくる
  this.style.color = 'red';
}
const changeBgColor = function() {
  this.style.backgroundColor = 'green';
}

// クリック時
// 第1引数: イベント名
// 第2引数: 実行したい関数
// btn.addEventListener('click', changeColor)
// 複数登録できる
// btn.addEventListener('click', changeBgColor)
// btn.removeEventListener('click', changeBgColor)

// マウスがホバーした時
// btn.addEventListener('mouseenter', hello)

// (2) 上記とは別の方法として、イベント時に発火する関数の登録の方法が以下に
  // ただ、複数の関数を登録できない(後からの方に上書きされる)
    // 「btn.onclick()」をイベントハンドラと呼ぶ
// btn.onclick = changeColor;
// btn.onclick = changeBgColor;
