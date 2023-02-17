const arry = [1, 2, 3, 4, 5];

// reduceの第1引数は、callback関数を入れる。
// reduceの第2引数は、初期値を指す。その場合、「1(初期値) + 1(arry[0])」に
// 何も指定しなかったら、arry[0]が初期値になる。その場合、「1(arry[0]) + 2(arry[1])」に。
// accuには、reduceの戻り値が毎度格納される。
// accuは、accumulation: 蓄積を指す。sumに近い。
arry.reduce(function(accu, curr) {
  console.log(accu, curr);
  return accu + curr;
}, 1);

const str = 'animation';
const strArry = str.split(''); // これで1文字ずつ分割されて、配列に格納される。
console.log(strArry);

// 初期値に""を入れると、最初は、「"" + <a>」になり、最終的には、「<a><n><i><m><a><t><i><o><n>」になる。
const result = strArry.reduce((accu, curr) => {
    // 以下、テンプレートリテラルを使用した場合
    return `${accu}<${curr}>`
    // return accu + '<' + curr + '>';
}, "")
console.log(result);
