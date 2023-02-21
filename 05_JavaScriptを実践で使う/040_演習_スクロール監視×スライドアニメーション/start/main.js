document.addEventListener('DOMContentLoaded', function () {
  const cb = function (el, isIntersecting) {
    if(isIntersecting) {
      // ここを追加しただけ
      el.classList.add('inview');
    }
  }

  // ここを変更しただけ(「.cover-slide」に)
  const so = new ScrollObserver('.cover-slide', cb);
});
