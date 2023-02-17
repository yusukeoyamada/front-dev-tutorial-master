// 渡す引数を可変にしたい
// const numbers = [1, 2, 3];
// console.log(addNumbers(numbers));
// function addNumbers(numbers) {
//   return numbers.reduce((sum, number) => {
//     return sum + number;
//   }, 0);
// }

// console.log(addNumbers(1, 2, 3));

// Rest演算子の例
// 以下のように、「...」とすると、「引数部分が配列となって」渡される。
  // これがSpread演算子
// function addNumbers(...numbers) {
//   return numbers.reduce((sum, number) => {
//     return sum + number;
//   }, 0);
// }

// ------ 上記がRest演算子の例 ------

// const defaultColors = ['赤', '緑'];
// const userFavoriteColors = ['オレンジ', '黄'];

// 以下がES5の例
  // これで合体できる
// const sum = defaultColors.concat(userFavoriteColors);
// console.log(sum);

// Spread演算子の例
// 以下のように、「...」とすると、「中身を展開」してくれる
  // だけではなく、「配列でない要素を、先頭や途中に入れることができる」
    // 視覚的にもわかりやすい
// const sum = [ '青', ...defaultColors, '紫', ...userFavoriteColors ];
// console.log(sum);

// ------ 上記がSpread演算子の例 ------

// 引数で使っているのは、「Rest演算子」(中身を配列にしてくれる)
// function validateShoppingList(...items) {
//   // indexOf: 引数に与えられた内容と同じ内容を持つ最初の配列要素のindexを返す。存在しない場合は「-1」を返す。
//   if(items.indexOf('牛乳') < 0) {
//     // ここで使っているのは、「Spread演算子」(中身を展開してくれる)
//     return [ '牛乳', ...items ];
//   }
// }

// validateShoppingList('オレンジ', 'パン');

// ------ 上記がSpread演算子と、Rest演算子の組み合わせの例1 ------

// 以下が、Spread演算子と、Rest演算子の組み合わせを使わない場合
// const MathLibrary = {
//   calculateProduct(a, b) {
//     // return a * b;

//     // (2)解決法: ここで、「multiply」を呼ぶパターン
//     return this.multiply(a, b);
//   },
//   // (1)解決法: 同じ処理を作るパターン
//   multiply(a, b) {
//     return a * b;
//   }
// }

// Spread演算子と、Rest演算子の組み合わせを使う場合
  // 以下、(2)解決法を使う場合
const MathLibrary = {
  // 以下、Rest演算子で、可変調な引数を取れるように
  calculateProduct(...rest) {
    // return a * b;

    // 以下、Spread演算子で、可変調な引数をそのまま展開できるように
      // 下記で、可変調な引数が配列になったrest配列を展開している。
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
}

// 既に公開しているライブラリで、関数名を「calculateProduct」から「multiply」に変えたい。
console.log(MathLibrary.calculateProduct(2, 3));
console.log(MathLibrary.multiply(2, 3));

// ------ 上記がSpread演算子と、Rest演算子の組み合わせの例2 ------
