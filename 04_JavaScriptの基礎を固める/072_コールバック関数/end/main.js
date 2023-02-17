// そもそもcallback関数とは)
// 以下、引数に渡されている「function getName()」を、callback関数という
// function hello(callback) {
//   console.log('hello' + callback());
// }
// function getName() {
//   return 'Code Mafia'
// }
// hello(getName);
// 以下、アロー関数を使った場合
// hello(() => 'Code Mafia');

// 例1)
// 以下nameには、下記「hello」メソッド内の「callback(lastname)」で指定された、「lastname」が入る
// 「lastname」は、「hello(getFirstName, 'Mafia')」で指定された、「'Mafia'」が入る。
// const getFirstName = function(name) {
//     return 'Code ' + name;
// }
// hello(getFirstName, 'Mafia');

// function hello(callback, lastname) {
//   console.log(callback);
//   console.log('hello ' + callback(lastname));
// }

// 例2)
function doSomething(a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

function multiply(a, b) {
    return a * b;
}

doSomething(2, 2, multiply);

function plus(a, b) {
    return a + b;
}

doSomething(2, 3, plus);
