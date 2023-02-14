// ここにメインのjsの記述を書いていく。
document.addEventListener('DOMContentLoaded', function () {
  // 「ヒーロースライダー」部分で使用
  // swiperを起動する処理
  const hero = new HeroSlider('.swiper');
  hero.start();

  // 「Houseセクション(Find Your House)」部分で使用
  // 以下は試験的に記述(「Find Your House」部分だけ動く)
  // const ta = new TweenTextAnimation('.tween-animate-title');
  // ta.animate();

  // 「Houseセクション(Find Your House)」部分で使用
  // 「Find Your House」部分で使用
  // 以下は、「05_JavaScriptを実践で使う/030_スクロール監視クラスの作成/end/main.js」から取ってきている。
  const _textAnimation = function (el, inview) {
    if(inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }
  const so = new ScrollObserver('.tween-animate-title', _textAnimation);

  // 「Houseセクション(Find Your House)」部分で使用
  // 「家の画像と、その家の名前」部分で使用
  const _inviewAnimation = function (el, inview) {
    // 画面内にpointer
    if(inview) {
      el.classList.add('inview');
    // 画面外にpointer
    } else {
      el.classList.remove('inview');
    }
  }
  const so2 = new ScrollObserver('.cover-slide', _inviewAnimation);

  // 「ヘッダー」部分で使用
  // 「nav-trigger」関連で使用
  const header = document.querySelector('.header');
  const _navAnimation = function (el, inview) {
    // 画面内にpointer
    if(inview) {
      // ここでは、画面内にいるときは、「triggered」を無くしたい
      header.classList.remove('triggered');
    // 画面外にpointer
    } else {
      // ここでは、画面外にいるときは、「triggered」を付けたい
      header.classList.add('triggered');
    }
  }
  // 「{ once: false }」をつけると、監視が切れない状態になる
  // 入れないと、「inview = true」の時で、監視が切れてしまう
  const so3 = new ScrollObserver('.nav-trigger', _navAnimation, { once: false });

  // 「ヘッダー」部分で使用
  // 「mobile-menu__btn」を起動させる為に
  new MobileMenu();
});
