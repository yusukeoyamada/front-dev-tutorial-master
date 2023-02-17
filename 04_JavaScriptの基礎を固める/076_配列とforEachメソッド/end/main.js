const arry = [1, 2, 3, 4, 5];

// arry.forEach(callback);
// 出力結果: 1, 2, 3, 4, 5
arry.forEach(function(v, i, ary) {
  // 第2引数i: index
  // 第3引数ary: ここでいう「arry」
  console.log(v, i, ary);
});

// 以下は、上記処理をアロー関数を使って、最大限まで簡略化した場合
// arry.forEach(v => console.log(v));

// 以下は、上記処理を、for文で書き直した場合
// for(let i = 0; i < arry.length; i++) {
//   const v = arry[i];
//   console.log(v);
// }
