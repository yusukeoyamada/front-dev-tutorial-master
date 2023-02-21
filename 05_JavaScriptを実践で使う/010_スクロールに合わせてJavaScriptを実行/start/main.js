const child = document.querySelector('.child');
const cb = function(entries, observer) {
  // 「io.observe()」によって、複数要素を監視対象にできるため、以下にて、entry(1つの要素)ごとに処理を行う
  entries.forEach(entry => {
    // 以下が画面内に入った状態
    if(entry.isIntersecting){
      console.log('inview');
      entry.target.classList.add('inview');

      // console.log(entry);
      // console.log(entry.target);
      // entry.targetのDOM(<div class="child"></div>)が格納されている。
        // 以下の記述で、監視を解除できる(inview, outview関係なく)
      // observer.unobserve(entry.target);
    // 以下が画面外にいった状態
    } else {
      console.log('outview');
      entry.target.classList.remove('inview');
    }
  });
  // alert('intersecting');
}

const options = {
  // 交差対象としたい親の要素等を設定(設定すると、その親要素等と対象の要素が交差したかどうかを監視できる)。ただ、rootを変更することは基本ない。
  root: null,
  // デフォルトは「0px」。上右下左。marginのように、画面内外に入ったかどうかの判定を調整できる
    // 右左を指定した場合は、交差されない場合もあるので、注意する。
    // 以下のように、カンマで区切らず、スペースで区切る(「0」でも必ずpxをつける。-10pxとかのマイナスにすると内側に)
      // rootMargin: "-300px, 0px",
  // rootMargin: "0px",
  rootMargin: "-300px 0px",
  // デフォルトは「0」。
  // 要素上から来るときは、「要素の一番下が0, 要素の一番上が1」
  // 要素下から来るときは、「要素の一番下が1, 要素の一番上が0」
    // 交差点を決めることができる。
      // []で、上真ん中下。交差点を制御できる。要素が大きい時に効果あり。
  // threshold: 0,
  threshold: [0, 0.5, 1],
}

// intersectionObserverとは、物体の交差の監視する者を意味する
  // 画面内外に入ったり、出たりする際に、callback関数(cb)が呼ばれることになる。
const io = new IntersectionObserver(cb, options);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
