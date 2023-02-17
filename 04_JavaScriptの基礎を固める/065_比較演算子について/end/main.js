// true: 1, false: 0
const num = Number(true);
console.log(num);

const num1 = 10;
const bool = Boolean(num1); // 「num1 = 0」とか、「num1 = null」は、falseになる
console.log(bool);

// 以下は、「num1」に値が設定されているかどうかが判定条件
// 上記の「Boolean(num1)」部分を見れば、何故true, falseになるのかがわかる
if(!num1) {
  console.log('this is true');
} else {
  console.log('this is false');
}

// 「1 == '1'」だと、左右のデータ型までは比較しないので、trueに(型の変換をしてしまう)
// 逆は、「1 != '1'」
// 「1 === '1'」だと、左右のデータ型も比較するので、falseに
// 逆は、「1 !== '1'」
