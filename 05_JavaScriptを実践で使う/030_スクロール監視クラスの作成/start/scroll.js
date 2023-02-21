// 「main.js」内の処理をリファクタリング
class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defalutOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true
    };
    this.cb = cb;
    // defalutOptionsと、渡ってくるoptionsをmerge。optionsの方に上書きされる。
      // optionsがnullか、undefinedの場合は、mergeしない
    this.options = Object.assign(defalutOptions, options);
    this.once = this.options.once;
    this._init();
  }

  _init(){
    const callback = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // bindしないと、ここでは、windowになる
          // console.log(this);

          // 以下でも良い
          // this.cb(entry.target, true);
          this.cb(entry.target, entry.isIntersecting);

          // (1)追加
          // 監視するのは1度きりかどうかにより、判定
          if(this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, entry.isIntersecting);
        }
      });
    };

    // IntersectionObserverの中では、windowが直のオブジェクト(window.IntersectionObserver)
      // bind(this)で縛りつける
    this.io = new IntersectionObserver(callback.bind(this), this.options);
    // (3)追加
      // IntersectionObserverは、割と新しい機能なので、使えないウィンドウがある。
        // 以下、polyfill(jsファイル)を使って、古いウィンドウでも使用可能に
          // @see https://github.com/GoogleChromeLabs/intersection-observer/blob/main/intersection-observer.js
        // IntersectionObserverを使わないで、スクロール時の監視を再現(100ミリ行間で、スクロールの値を監視)
    this.io.POLL_INTERVAL = 100;
    this.els.forEach(el => this.io.observe(el));
  }

  // (2)追加
  destroy() {
    // IntersectionObserverで監視している対象の開放を行う
    this.io.disconnect();
  }
}
