// htmlのscriptタグの中に「defer」を記載すると、
// htmlの読み込みが全て終わった後に、scriptを読み込むように指示してくれるので
// 以下のように、「DOMContentLoaded」時にイベントを発火させる記述が不要になる。
  // こちらの方が今はメジャーらしい
// document.addEventListener('DOMContentLoaded', function () {
  // 「ヒーロースライダー」部分で使用
  // swiperを起動する処理
  // const hero = new HeroSlider('.swiper');
  // hero.start();

  // 「Houseセクション(Find Your House)」部分で使用
  // 以下は試験的に記述(「Find Your House」部分だけ動く)
  // const ta = new TweenTextAnimation('.tween-animate-title');
  // ta.animate();

  // 「Houseセクション(Find Your House)」部分で使用
  // 「Find Your House」部分で使用
  // 以下は、「05_JavaScriptを実践で使う/030_スクロール監視クラスの作成/end/main.js」から取ってきている。
  // const _textAnimation = function (el, inview) {
  //   if(inview) {
  //     const ta = new TweenTextAnimation(el);
  //     ta.animate();
  //   }
  // }
  // const so = new ScrollObserver('.tween-animate-title', _textAnimation);

  // 「Houseセクション(Find Your House)」部分で使用
  // 「家の画像と、その家の名前」部分で使用
  // const _inviewAnimation = function (el, inview) {
  //   // 画面内にpointer
  //   if(inview) {
  //     el.classList.add('inview');
  //   // 画面外にpointer
  //   } else {
  //     el.classList.remove('inview');
  //   }
  // }
  // const so2 = new ScrollObserver('.cover-slide', _inviewAnimation);

  // 「ヘッダー」部分で使用
  // 「nav-trigger」関連で使用
  // const header = document.querySelector('.header');
  // const _navAnimation = function (el, inview) {
  //   // 画面内にpointer
  //   if(inview) {
  //     // ここでは、画面内にいるときは、「triggered」を無くしたい
  //     header.classList.remove('triggered');
  //   // 画面外にpointer
  //   } else {
  //     // ここでは、画面外にいるときは、「triggered」を付けたい
  //     header.classList.add('triggered');
  //   }
  // }

  // 「{ once: false }」をつけると、監視が切れない状態になる
  // 入れないと、「inview = true」の時で、監視が切れてしまう
  // const so3 = new ScrollObserver('.nav-trigger', _navAnimation, { once: false });

  // 「ヘッダー」部分で使用
  // 「mobile-menu__btn」を起動させる為に
  // new MobileMenu();

  // new Main();
// });

// ここにメインのjsの記述を書いていく。
// 上記をclassで整理
  // 以下で、「_observers」や「_init()」のように、privateを表す記述がなされているが、
  // 最新のブラウザでは、以下のように記載すると、privateを強制できるようになる
    // 例) 「#observers」、「#init()」
class Main {
  // 最新のブラウザで、#を使ったprivateなプロパティを利用する際には、以下のように、constructorの前に定義する必要あり
  // #observers = [];

  constructor() {
    this.header = document.querySelector('.header');
    this.hero = new HeroSlider('.swiper');
    this.sides = document.querySelectorAll('.side');
    this._observers = [];
    this._init();
  }

  _init() {
    new MobileMenu();

    // Loadingが完了後に、第2引数に渡されたコールバック関数を実行してくれる。
      // Loading中に、アニメーションが終わってしまうのを防ぐ為。
    Pace.on('done', this._scrollInit.bind(this));
  }

  _scrollInit() {
    // SPA(1画面内でjsによって動的に画面を切り替える方法)の時には、監視対象がどんどん増えていくので、必要に応じて、監視を切る必要がある。
      // 以下で、配列でobserverを持っているのは、observer内で監視を切るメソッドを持っており、必要に応じて、それで監視を切れるようにする為。
    this._observers.push(
      // 「{ once: false }」をつけると、監視が切れない状態になる
        // 入れないと、「inview = true」の時で、監視が切れてしまう
          // 直近のオブジェクトが「ScrollObserver」なので、bind(this)する(中でthisを使っているので)
      new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), { once: false }),
      // 「rootMargin: "-300px 0px"」とすると、内側に上下300px入ってからじゃないと、検知しなくなる。
      new ScrollObserver('#main-content', this._sideAnimation.bind(this), { once: false, rootMargin: "-300px 0px" }),
      new ScrollObserver('.swiper', this._toggleSlideAnimation.bind(this), { once: false }),
      new ScrollObserver('.cover-slide', this._inviewAnimation),
      new ScrollObserver('.appear', this._inviewAnimation),
      new ScrollObserver('.tween-animate-title', this._textAnimation),
    );

    console.log(this._observers);
  }

  // 必要に応じて、observerにより監視を切る為には、以下メソッドを使う
  destroy() {
    this._observers.forEach(so => so.destroy());
  }


  // 「ヘッダー」部分で使用
  // 「nav-trigger」関連で使用
  _navAnimation(el, inview) {
    // 画面内にpointer
    if(inview) {
      // ここでは、画面内にいるときは、「triggered」を無くしたい
      this.header.classList.remove('triggered');
    // 画面外にpointer
    } else {
      // ここでは、画面外にいるときは、「triggered」を付けたい
      this.header.classList.add('triggered');
    }
  }

  // 「ヒーロースライダー」部分で使用
  // swiperを起動・停止する処理
  _toggleSlideAnimation(el, inview) {
    // 画面内にpointer
    if(inview) {
      this.hero.start();
    // 画面外にpointer
    } else {
      this.hero.stop();
    }
  }

  _sideAnimation(el, inview) {
    // 画面内にpointer
    if(inview) {
      this.sides.forEach(side => side.classList.add('inview'));
    // 画面外にpointer
    } else {
      this.sides.forEach(side => side.classList.remove('inview'));
    }
  }

  // 「Houseセクション(Find Your House)」部分で使用
  // 「Find Your House」部分などで使用
  _textAnimation(el, inview) {
    if(inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  // 「Houseセクション(Find Your House)」部分で使用
  // 「家の画像と、その家の名前」部分で使用
  _inviewAnimation(el, inview) {
    // 画面内にpointer
    if(inview) {
      el.classList.add('inview');
    // 画面外にpointer
    } else {
      el.classList.remove('inview');
    }
  }
}

// インスタンス化は、classの記述の後で
new Main();
