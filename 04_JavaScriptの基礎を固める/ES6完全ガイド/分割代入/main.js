// let expense = {
//   type: '交際費',
//   amount: '4500 JPY',
// }

// (例1) ここがスタート(前提として、対象はオブジェクト)
// let type = expense.type;
// let amount = expense.amount;

// 以下、上記を分割代入を使った場合
// const { type } = expense;
// const { amount } = expense;

// 以下、上記をもっと省略した場合
// const { type, amount } = expense;
// console.log(type);
// console.log(amount);

// 以下の表記をした場合は、「type」というキーを、「Mytype」というキーに変更できる
// const { type: Mytype, amount } = expense;
// console.log(Mytype);
// console.log(amount);

// -------- 例1はここまで --------

// let savedFile = {
//   extension: 'jpg',
//   name: 'profile',
//   size: 14040,
// }

// function fileSummary(file) {
//   return `${file.name}.${file.extension}の容量は${file.size}です。`
// }

// (例2) 分割代入は、関数の引数にも、使える(前提として、対象はオブジェクト)
  // 用途: 「引数の順番を気にする必要がなくなる」点が挙げられる
// 引数部分は、以下と同じような形になっている。
  // const { name, extension, size } = savedFile;
// 第2引数でも同様に使える。
// function fileSummary( { name, extension, size }, { username }) {
//   return `${username}: ${name}.${extension}の容量は${size}です。`
// }

// console.log(fileSummary(savedFile, { username: 'ken' }));

// -------- 例2はここまで --------

// const companies = [
//   'Google',
//   'Facebook',
//   'Uber'
// ];

// (例3) 分割代入は、配列にも使える (前提として、対象は配列)
  // []の中は、変数名で、先頭の要素から順に入る。
    // やっていることは、以下と同じだが、マジックナンバーを使うので、以下よりかはわかりやすい記述になる。
      // const firstCompany = companies[0];
      // const secondCompany = companies[1];
      // const thirdCompany = companies[2];
// const [ name1, name2, name3 ] = companies;
// console.log(name1);
// console.log(name2);
// console.log(name3);

// 以下、小まとめ
  // []であれば、「companies」の要素を抽出
    // const [ name1 ] = companies;
  // {}であれば、「companies」のプロパティを抽出する(ex) 「companies.length」は、配列のプロパティとして元々存在する)
    // const { length } = companies;

// -------- 例3はここまで --------

// const companies = [
//   'Google',
//   'Facebook',
//   'Uber'
// ];

// (例4) 分割代入は、Rest演算子と組み合わせることもできる。
  // restは、配列で入っている(ex) ['Facebook', 'Uber']だったり、['Uber']だったり)
// const [ name1, ...rest ] = companies;
// const [ name1, name2, ...rest ] = companies;
// console.log(name1);
// console.log(name2);
// console.log(rest);

// -------- 例4はここまで --------

// const companies = [
//   { name: 'Google', location: 'マウンテンビュー' },
//   { name: 'Facebook', location: 'メンロパーク' },
//   { name: 'Uber', location: 'サンフランシスコ' },
// ];

// (例5) 配列の中に、オブジェクトがある場合の、分割代入の方法
// 以下にて、1個目の要素の「location」キーの値を抽出できている。
// 「const [ { location } ] = companies」だと、「location」は既に定義されていると言われる(nameだとならない)
// const [ { location: location1 } ] = companies;
// console.log(location1);

// 以下は、2つ以上、抽出する場合
// const [ { name: name1 }, { name: name2 } ] = companies;
// console.log(name1);
// console.log(name2);

// -------- 例5はここまで --------

// const Google = {
//   locations: ['マウンテンビュー', 'ニューヨーク', 'ロンドン'],
// };

// const { locations } = Google;
// const [ fisrt ] = locations;
// console.log(fisrt);

// (例6) オブジェクトの中に、配列がある場合の、分割代入の方法
// 上記を以下のように省略できる。
  // const { locations: locs } = Google;
  // const [ fisrt ] = locs;
    // 下記は、上記をさらに省略した場合
// const { locations: [ fisrt ] } = Google;
// console.log(fisrt);

// -------- 例6はここまで --------

const points = [
  [4, 5],
  [10, 1],
  [0, 40],
]

// 以下のようにもできるが
// points.map(point => {
//   // const x = point[0];
//   // const y = point[1];
//   // 上記を以下のように修正できる
//   const [ x, y ] = point;
// });

// (補足) ES6の機能をふんだんに使って、以下のように実装できる。
  // map
  // 関数部分に分割代入
  // オブジェクトリテラルの強化部分
const map = points.map(([ x, y ]) => {
  // return { x: x, y: y } ;
  // 上記をオブジェクトリテラルの強化によって、以下のようにできる
    // 同じ名前のキーとバリューは省略できる
  return { x, y } ;
});

console.log(map);
