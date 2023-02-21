class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    // 第1引数(".swiper")で、「.swiper」を対象として、第2引数のオブジェクトに記載された設定を適用。
      // 各々、クラス名を設定することで、pagination、navigation、scrollbarの設定を行うこともできる
    return new Swiper(this.el, {
      // swiperが縦方向(垂直)にスライディングする
        // 以下をコメントアウトすると、水平方向にスライディングする
      // direction: "vertical",

      // loop処理を可能にさせる
        // 以下をコメントアウトすると、loop処理がなされなくなる
      loop: true,

      // アニメーションが滑らかになる。
      // effect: 'fade',
      // アニメーションが立体感のある形になる。
      effect: 'coverflow',

      // hoverした時に、pointerを掴む感じにできる
      grabCursor: true,

      // スライダーが中央揃えになる
      centeredSlides: true,

      // 表示されているViewに何枚の画像を表示させるかを設定
      slidesPerView: 1,

      // スライドからスライドに遷移する間隔を設定
      speed: 1000,

      // 以下は、レスポンジブ対応
      breakpoints: {
        // ウィンドウのサイズ(横幅)をキーにできる
        1024: {
          // 3枚表示されているように見えるが、2枚は0.5枚分ずつ
          slidesPerView: 2,
        }
      },

      // 自動的に、スライドが切り替わる
      // autoplay: {
      //   // 4sごとに
      //   delay: 4000,
      //   // マウスでスライドさせた場合でも、自動的にスライドが切り替わるように
      //   disableOnInteraction: false,
      // }
    });
  }

  start(options = {}) {
    const marged_options = Object.assign({
      // 4sごとに
      delay: 4000,
      // マウスでスライドさせた場合でも、自動的にスライドが切り替わるように
      disableOnInteraction: false,
    }, options);

    // 自動的に、スライドが切り替わる
    this.swiper.params.autoplay = marged_options;

    this.swiper.autoplay.start();
  }

  stop() {
    this.swiper.autoplay.stop();
  }
}
