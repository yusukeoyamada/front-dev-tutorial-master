document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('#btn');
  const ta = new TextAnimation('.animate-title');
  const ta2 = new TextAnimation('.animate-title-2');
  ta.animate();
  ta2.animate();

  // 以下のままだと、「this」は、「btn」になる。
    // ここでは、clickされた要素が、thisになる。
      // 「ta.animate」のように、関数として渡した場合は、「ta」を無視して、「animate()」内のthisは、「btn」になる。
  // btn.addEventListener('click', ta.animate);

  // (1) 上記解決方法
  btn.addEventListener('click', ta.animate.bind(ta));

  // (2) 上記解決方法(「.bind」を使わない方法)
  // 無名関数で囲んで、その中で関数を実行する
  btn.addEventListener('click', function() {
    // 「ta」というオブジェクトのメソッドとして、「animate()」が実行されるので、「animate()」内のthisは、「ta」になる
    ta.animate();
  });
});

class TextAnimation {
  constructor(el) {
    // ここでいうthisは、TextAnimationを指す。
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    // この中だと、thisは「TextAnimation」を指す
    console.log(this);

    this.el.classList.toggle('inview');

    // ここで、thisを特定の変数に格納して、利用するというやり方もある
    // const _that = this;

    // 「window.」部分は省略可能(グローバルオブジェクトは省略可能)
    // 以下は、引数にfunctionをやった場合
    // 「.bind(this)」をつけると、上記animate()内でのthisが「this」として扱われるようになる。
      // これを「bindを用いたthisの束縛」と呼ぶ。
    // window.setTimeout(function () {
    //   // この中だと、「.bind(this)」を付けないと、thisは「window」を指す
    //   console.log(this);
    //   this.el.classList.toggle('inview');

    //   // 以下は、上記「_that」を使ったやり方。これをすると、「.bind(this)」は使わなくても良くなる。
    //   // console.log(_that);
    //   // _that.el.classList.toggle('inview');
    // }.bind(this));

    // 以下は、引数にアロー関数をやった場合
    // window.setTimeout((() => {
    //   // この中だと、thisは「window」を指す
    //   console.log(this);
    //   this.el.classList.toggle('inview');
    // }).bind(this));
  }
}

// ここで、thisを見ると、windowオブジェクトが取れる
// windowオブジェクトとは、ブラウザのグローバルオブジェクト
// ブラウザでサイトを表示している状態の変数やメソッドなどを格納するオブジェクト
  // documentを含む
// console.log(this);

// thisは、直近で囲まれているオブジェクトを参照する。
