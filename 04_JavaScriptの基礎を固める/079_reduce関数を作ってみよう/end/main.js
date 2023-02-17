// 以下、既に提供されている「strArry.reduce(tag, "")」の例
// const str = 'animation';
// const strArry = str.split('');

// function tag(accu, curr) {
//   console.log(accu);
//   return `${accu}<${curr}>`;
// }

// const result = strArry.reduce(tag, "");
// console.log(result);

const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
  console.log(accu, curr);
  return `${accu}<${curr}>`;
}

// 以下は、reduceを自作してみた例
function reduce(arry, callback, defaultValue) {
  let accu = defaultValue;
  // for(let i = 0; i < arry.length; i++) {
  //   let curr = arry[i];
  //   accu = callback(accu, curr); // ここで、上記「tag(accu, curr)」が実行される
  // }

  // 以下、上記for文をforEachに置き換えた場合
  // arry.forEach(function(v, i, ary) {
  //   let curr = v;
  //   accu = callback(accu, curr); // ここで、上記「tag(accu, curr)」が実行される
  // });

  // 以下、上記forEachにアロー関数で最大限まで省略した場合
  arry.forEach(curr => accu = callback(accu, curr));
  return accu;
}

const result = reduce(strArry, tag, "");
console.log(result);
