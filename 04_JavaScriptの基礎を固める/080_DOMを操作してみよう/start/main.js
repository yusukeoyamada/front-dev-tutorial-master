// DOM(Document Object Model)は、HTMLをjsから操作できるようにしたインターフェース
  // HTMLをオブジェクト形式で表したもの
// jsからは、DOM_API(DOMインターフェース)を通じて、htmlの情報を取得・変更する。
// 情報の取得・変更・イベントの登録ができる。

// 1つのhtmlが、1つの「document」で定義されている。
//「document」は、1つのhtmlの情報が格納されているオブジェクト
  // document.body, document.headで要素を取れる
// このような階層をDOMツリーと呼ばれる
  // ノード(html, body, head)が集まって、DOMツリーが形成される。

// document.querySelector('#main-title')
  // ID指定の場合は、上記
  // 以下でも上記と同じ意味だが、今は、上記の書き方の方が良い
    // document.getElementById('main-title')

// document.querySelector('.sub-title')
  // クラス指定の場合は、上記

// document.querySelector('h1')
  // タグ指定の場合は、上記

// document.querySelector('.item')
  // これだと先頭の要素しか取れない。
// document.querySelectorAll('.item')
  // これなら全て取れる

// const h1 = document.querySelector('#main-title')
  // h1.innerHTML = 'AAAAA <span style="color: blue;">BBBBB</span>';
    // h1.innerHTML
      // 'AAAAA <span style="color: blue;">BBBBB</span>'が取れるし、styleが指定されているspanタグなどが含まれていても、テキスト情報だけでなく、htmlを取る。
  // h1.textContent = 'AAAAA <span style="color: blue;">BBBBB</span>';
    // h1.textContent
      // 'AAAAA BBBBB'が取れるが、styleが指定されているspanタグなどが含まれていても、テキスト情報だけ取る。
  // h1.classList.add('underline')
    // classListを使うことで、クラスを追加したり、削除したりできる
      // h1.classList.toggle('underline')
        // これで、クラスを付けたり、消したりできる

// elementのことを、nodeという場合もある
  // 以下のように、短いスコープで見る方が良い
  // const li = document.querySelectorAll('ul > li');
    // 「li」を見ると、以下のようになっている
      // NodeList(3) [li.item.item-1, li.item.item-2, li.item.item-3]
        // 0: li.item.item-1
        // 1: li.item.item-2
        // 2: li.item.item-3
      // li.forEach(node => node.style.color = 'purple');
