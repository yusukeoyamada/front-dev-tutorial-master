document.addEventListener('DOMContentLoaded', function () {
  // 以下は、elementsの略称
  const els = document.querySelectorAll('.animate-title');
  const cb = function(entries, observer) {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        console.log('inview');

        const ta = new TextAnimation(entry.target);
        ta.animate();

        observer.unobserve(entry.target);
      } else {
        console.log('outview');
      }
    });
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  }

  const io = new IntersectionObserver(cb, options);
  els.forEach(el => io.observe(el));
});
