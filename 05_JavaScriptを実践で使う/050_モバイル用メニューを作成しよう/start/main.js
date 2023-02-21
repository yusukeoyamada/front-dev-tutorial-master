class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    // メニュー押下後に、背景色をクリックした時用
    this.DOM.cover = document.querySelector('.mobile-menu__cover');
    this.DOM.container = document.querySelector('#global-container');
    // 影響範囲を絞る意図で、プライベートメソッドに分けている。
      // this.eventType側としては、最終的にイベント名が渡ってくれさえすれば良い
      // その為、どのような条件でどのイベント名を渡すかは、プライベートメソッド内で処理してくれれば良い
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    // 「window.ontouchstart」というプロパティが存在するのは、スマホの画面のみ
      // touchstartイベント
        // スマホの画面でのみ発火
        // タッチした瞬間に発火する。こっちの方がレスポンスは早い。
    // return window.ontouchstart ? 'touchstart' : 'click';

    // 以下、endフォルダ参照(講義内の記述と異なっているように感じるが、一旦このままで)
    // const isTouchCapable =
    //   "ontouchstart" in window ||
    //   (window.DocumentTouch && document instanceof DocumentTouch);

    // 以下は、質問で記載されていたもの
      // 参考: https://stackoverflow.com/questions/14439903/how-can-i-detect-device-touch-support-in-javascript
      // 実際の開発ではブラウザ依存の挙動を制御する場合にはmodernizrなどのライブラリを使うのが一般的
        // https://modernizr.com/
    const isTouchCapable =
      'ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch) ||
      navigator.maxTouchPoints > 0 ||
      window.navigator.msMaxTouchPoints > 0;

    return isTouchCapable ? "touchstart" : "click";
  }

  _toggle() {
    // ここでは、直近のオブジェクトは、「btn」になってしまっている
    // console.log(this);
    this.DOM.container.classList.toggle('menu-open');
  }

  _addEvent() {
    this.DOM.btn.addEventListener('click', this._toggle.bind(this));
    // メニュー押下後に、背景色をクリックした時用
    this.DOM.cover.addEventListener('click', this._toggle.bind(this));
  }
}

new MobileMenu();
