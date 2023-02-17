// 以下が、元の処理群
// document.addEventListener('DOMContentLoaded', function () {
//     const el = document.querySelector('.animate-title');
//     const el2 = document.querySelector('.animate-title-2');
//     const str = el.innerHTML.trim().split("");
//     const str2 = el2.innerHTML.trim().split("");

//     // let concatStr = '';
//     // for(let c of str) {
//     //     c = c.replace(/\s+/, '&nbsp;');
//     //     concatStr += `<span class="char">${c}</span>`;
//     // }

//     el.innerHTML = str.reduce((acc, curr) => {
//         curr = curr.replace(/\s+/, '&nbsp;');
//         return `${acc}<span class="char">${curr}</span>`;
//     }, "");
//     el2.innerHTML = str2.reduce((acc, curr) => {
//         curr = curr.replace(/\s+/, '&nbsp;');
//         return `${acc}<span class="char">${curr}</span>`;
//     }, "");
// });

// 上記のように、重複した処理を、以下にてリファクタリングする
// 以下の処理は、「document.addEventListener('DOMContentLoaded', function () {});」内で記述する必要はない。
  // TextAnimationは、newした時点で、処理が実行されるから、new以前の時点では、DOMツリーが生成されていなくとも問題なし。
class TextAnimation {
  // 以下がコンストラクタ
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    // 内部で内部関数にアクセスするには、以下
    this.el.innerHTML = this._splitText();
  }

  // 以下が関数
  // 内部関数(private_method)は、「_」をつける
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }

  // 外部関数(public_method)は、「_」をつけない(厳格にprivateとして定義できない??)
  animate() {
    this.el.classList.toggle('inview');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const ta = new TextAnimation('.animate-title');
  const ta2 = new TextAnimation('.animate-title-2');

  // 第2引数は、第1引数で指定した関数等を実行する前に待つタイマーの時間をミリ秒 (1/1000 秒) 単位で指定
  setTimeout(() => {
    ta.animate();
    ta2.animate();
  }, 1000);
});
