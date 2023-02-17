// const dcl = document.querySelector('.dcl');
// const load = document.querySelector('.load');

// 「DOMContentLoaded」とは、htmlをブラウザが解釈して、DOMツリーを作成し終わった段階で、発火するイベント
// windowにも登録できる
// htmlは、基本的に上から読み込まれるので、「<script src="main.js"></script>」が記載されている位置に応じて、「以下の記述」時にエラーが発生する場合がある
// なので、「DOMContentLoaded」イベント時に行うという処理を施せば、問題が解決する。
document.addEventListener("DOMContentLoaded", function () {
  const dcl = document.querySelector('.dcl');
  const load = document.querySelector('.load');
  dcl.classList.add('done');

  // 「以下の記述」に該当する部分
  // const h1 = document.querySelector('h1');
  // h1.style.color = 'red';
});

// 「load」とは、htmlをブラウザが解釈して、DOMツリーを作成し終わった後に、画像やstyleやjsなど、全てのコンテンツをダウンロードし終わった段階で、発火するイベント
// windowに登録するので、documentには登録できない
window.addEventListener("load", function () {
  const dcl = document.querySelector('.dcl');
  const load = document.querySelector('.load');
  load.classList.add('done');

  // 「以下の記述」に該当する部分を書いても良いが、上記「DOMContentLoade」の方がイベントとしては発火が早い為、上記の方に記述するのが良い
  // const h1 = document.querySelector('h1');
  // h1.style.color = 'red';
});
