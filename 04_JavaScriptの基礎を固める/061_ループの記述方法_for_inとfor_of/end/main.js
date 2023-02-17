const arry = [1,2,3,4,5,6];

// この場合、「i」には、indexが渡される。
for(let i in arry) {
  console.log(i, arry[i]);
}

// この場合、「v」には、値(value)が渡される。
// 対応していないエディタがあるから、webpackやbabelでコードを変換するソフトを使用する必要がある。
for(let v of arry) {
  console.log(v, arry[v]);
}
