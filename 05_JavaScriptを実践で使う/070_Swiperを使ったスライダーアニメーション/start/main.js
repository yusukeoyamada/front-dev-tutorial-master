document.addEventListener('DOMContentLoaded', function() {
  // webサイトの一番上部に設置される画像やスライダーを、ヒーロースライダー、ヒーローイメージという
  const hero = new HeroSlider(".swiper");
  hero.start();
  // hero.start({ delay: 2000 });

  // 5秒後にstopが呼ばれる
  // setTimeout(() => {
  //   hero.stop();
  // }, 5000);
});
