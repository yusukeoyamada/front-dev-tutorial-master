document.addEventListener('DOMContentLoaded', function () {
  // 以下、通常のtext-animation
  // const ta = new TextAnimation('.animate-title');

  // 以下、tween-text-animation
  const ta = new TweenTextAnimation('.tween-animate-title');
  ta.animate();
});


class TextAnimation {
  constructor(el) {
    // 以下のように、DOMかDOMじゃないかを判別する記載方式の方がわかりやすい
    this.DOM = {}
    this.DOM.el = document.querySelector(el);
    // 以下だけ、DOMではないことがわかる。
    this.chars = this.DOM.el.innerHTML.trim().split("");
    this.DOM.el.innerHTML = this._splitText();

    // 以下が元の処理
    // this.el = document.querySelector(el);
    // this.chars = this.el.innerHTML.trim().split("");
    // this.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    this.DOM.el.classList.toggle('inview');

    // 以下が元の処理
    // this.el.classList.toggle('inview');
  }
}

// 以下無駄なコードを書かない為のクラス継承の話
class TweenTextAnimation extends TextAnimation {
  constructor(el) {
    super(el);
    this.DOM.chars = this.DOM.el.querySelectorAll('.char');

    // 上記「super(el)」で代替可能
    // this.el = document.querySelector(el);
    // this.chars = this.el.innerHTML.trim().split("");
    // this.el.innerHTML = this._splitText();
  }

  // 以下メソッドは、継承により既に使える。
  // _splitText() {
  //   return this.chars.reduce((acc, curr) => {
  //       curr = curr.replace(/\s+/, '&nbsp;');
  //       return `${acc}<span class="char">${curr}</span>`;
  //   }, "");
  // }

  // 以下オーバーライド
  animate() {
    // inviewクラスがつかないと、styleで「opacity: 0」と設定されているから、以下処理を追加
    this.DOM.el.classList.add('inview');

    this.DOM.chars.forEach((char, i) => {
      // 引数1: 対象となるDOM
      // 引数2: アニメーションの間隔(animation-durationのようなもの)
      // 引数3: アニメーションの詳細を記述したオプションをオブジェクトととして渡す
      TweenMax.to(char, .6, {
        // easing-function: いつも「ease」とかで記述しているやつ
        ease: Back.easeOut,
        delay: i * .05,
        // アニメーションが始まる状態(translateと似たような意味)
        startAt: { y: '-50%', opacity: 0},
        // 以下2つは、アニメーションが終了する状態
        y: '0%',
        opacity: 1
      });
    });

    console.log('abcdefg');
  }
}
