let numbers = [1, 2, 3, 4];

// return値は、reduceの引数の中の「sum」
  // 用途としては、特定の配列の要素をくっつけたり、まとめたりする際に使用できる。
const sum = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(sum);

// 以下のように、重複チェックをする際に、使用できる
// let numbers = [1, 1, 2, 3, 4, 4];

// function unique(array) {
//   return array.reduce(function(previous, element){
//     console.log('previous: ' + previous);
//     console.log('element: ' + element);
//     var result = previous.find(function(target){
//       return element === target;
//     });

//     console.log('result: ' + result);
//     if(!result){
//       previous.push(element);
//     }
//     return previous;
//   }, []);
// }

// console.log(unique(numbers));
