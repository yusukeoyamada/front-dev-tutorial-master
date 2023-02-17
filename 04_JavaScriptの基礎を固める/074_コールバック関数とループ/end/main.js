// 以下が、元の処理
// 「function forEach」というメソッドを独自に作った
// const arry = [1, 2, 3, 4, 5];
// function forEach(ary) {
//   for(let i = 0; i < ary.length; i++) {
//       console.log(ary[i]);
//   }
// }
// forEach(arry);

// callbackを使った例1)
// const arry = [1, 2, 3, 4, 5];
// function forEach(ary, callback) {
//     for(let i = 0; i < ary.length; i++) {
//         callback(ary[i]);
//     }
// }
// function log(val) {
//     console.log(val);
// }
// forEach(arry, log);

// callbackを使った例2)
const arry = [1, 2, 3, 4, 5];
function forEach(ary, callback) {
    for(let i = 0; i < ary.length; i++) {
        callback(ary[i]);
    }
}

function log(val) {
    console.log(val);
}

function double(val) {
    val = val * 2;
    log(val);
}

forEach(arry, double);

// 引数に無名関数を使う場合
// forEach(arry, function(val) {
//   val = val * 2;
//   log(val);
// });
