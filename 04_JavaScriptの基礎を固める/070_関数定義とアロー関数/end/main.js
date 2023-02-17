// 以下につき、{}の中が1行だけなら、{}を省略できる
// const hello = (name, age) => {
//   `${name} ${age}`
// };
// 以下につき、引数が1つ、引数にデフォルト値がない場合なら、引数の()を省略可能
// const hello = (name) => `${name}`;
const hello = (name, age) => `${name} ${age}`;

const arry = [1,2,3,4,5,6];
arry.forEach(value => console.log(value));
