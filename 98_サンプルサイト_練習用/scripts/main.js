// ここにメインのjsの記述を書いていく。
document.addEventListener('DOMContentLoaded', function () {
  // swiperを起動する処理
  const hero = new HeroSlider('.swiper');
  hero.start();

  // 「Houseセクション(Find Your House)」部分で使用
  // 以下は試験的に記述(「Find Your House」部分だけ動く)
  // const ta = new TweenTextAnimation('.tween-animate-title');
  // ta.animate();
  // 「Find Your House」部分で使用
  // 以下は、「05_JavaScriptを実践で使う/030_スクロール監視クラスの作成/end/main.js」から取ってきている。
  const _textAnimation = function (el, inview) {
    if(inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }
  const so = new ScrollObserver('.tween-animate-title', _textAnimation);

  // 「家の画像と、その家の名前」部分で使用
  const _inviewAnimation = function (el, inview) {
    // 画面内にpointer
    if(inview) {
      el.classList.add('inview');
    // 画面外にpointer
    } else {
      el.classList.add('remove');
    }
  }
  const so2 = new ScrollObserver('.cover-slide', _inviewAnimation);
});
