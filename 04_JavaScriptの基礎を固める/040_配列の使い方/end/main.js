// const array = new Array(1, 2, 3, 4, 5, 6);
// constでは、「array = new Array()」はできない。
// constでは、「array[5] = 8」はできる。
// jsでは、「array = [1, 2, 3, 4, 5, 6, 'moji', false]」といった、色んな型の要素を配列に入れられる。
const array = [1, 2, 3, 4, 5, 6];

array.unshift('new item');  // 先頭に入れる
array.push('new item');     // 末尾に入れる
array.shift();              // 先頭を削除「const val = array.shift()」とすると、削除した値が変数に入る。
array.pop();                // 末尾を削除「const val = array.pop()」とすると、削除した値が変数に入る。

console.log(array);
