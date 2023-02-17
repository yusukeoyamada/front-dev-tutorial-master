document.addEventListener('DOMContentLoaded', function() {
  // alert('hello');

  const el = document.querySelector('.animate-title');

  // console.log(el.innerHTML.trim().split(''));
  const str = el.innerHTML.trim().split('');

  // (1) 以下は、for文で表した場合 (reduceのように、用途が明確に決まっていない)
  // 「.trim()」で、前後の空白を取り除くことができる
  // console.log(el.innerHTML.trim());
  // const str = el.innerHTML.trim();
  // let concatStr = '';

  // for(let c of str) {
  //   // 「PLAY ANIMATION」だと、「PLAYANIMATION」になってしまう
  //     // display: inline-block;
  //       // 要素がない(スペースだけも含む)と、高さと横幅が0になってしまう。
  //   // 「&nbsp;」は半角スペースを表すこともできる
  //   // c = c.replace(' ', '&nbsp;');

  //   // 以下は、正規表現で表した場合
  //   // 「\」は「$」で、「\s」は半角スペース、「\s+」で1文字以上の半角スペース
  //   c = c.replace(/\s+/, '&nbsp;');

  //   // 「`」は、バックティック
  //   // 「`${}`」という記法は、テンプレートリテラルという
  //   // concatStr = concatStr + `<span class="char">${c}</span>`;
  //   concatStr += `<span class="char">${c}</span>`;
  // }

  // console.log(concatStr);
  // el.innerHTML = concatStr;

  // 以下のように、concatStrに代入しても良い
  // let concatStr = str.reduce((acc, curr) => {
  //   curr = curr.replace(/\s+/, '&nbsp;');
  //   return `${acc}<span class="char">${curr}</span>`;
  // }, "");
  // el.innerHTML = concatStr;

  // (2) 以下は、reduce文で表した場合 (for文のように用途が複数考えられるものではなく、用途がわかりやすいメソッドを使える時は使う)
  // 初期値「""」とすることで、replace処理を適切に行えるように
    // 初期値を設定しないと、str[0]は、accに入ってしまうので、str[0]のreplace処理がなされなくなってしまうから。
  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, '&nbsp;');
    return `${acc}<span class="char">${curr}</span>`;
  }, "");

  // (注意) el.innerHTMLの値を頻繁に書き換えるのは、パフォーマンス的に良くない
    // 上記concatStrの代わりに、el.innerHTMLを使うなどして
});

// 以下は、htmlに直で書いてあった、jsを移植してみた
const btn = document.querySelector('#container>.btn');
// console.log(btn);
const toggleClass = function() {
  document.querySelector('.animate-title').classList.toggle('inview');
}
btn.addEventListener('click', toggleClass);
