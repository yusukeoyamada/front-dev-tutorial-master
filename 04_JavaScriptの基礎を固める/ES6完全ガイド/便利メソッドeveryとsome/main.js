let computers = [
  { name: 'Apple', ram: '24' },
  { name: 'Compaq', ram: '4' },
]

// 全てで動かせるフラグ
let allComputersCanRun = true;
// 何かで動かせるフラグ
let someComputersCanRun = false;

for(let i = 0; i < computers.length; i++) {
  let computer = computers[i];

  // ここでは、「16GB ram」が必要なソフトの基準として
  if(computer.ram < 16) {
    allComputersCanRun = false;
  } else {
    someComputersCanRun = true;
  }
}

// 以下、every構文
// 1つでも条件に合致していないものがあれば、「false」がreturnで返ってくる
  // 1つずつの条件判定が全てtrueである必要あり(true && true)
const every = computers.every((computer) => {
  return computer.ram >= 16;
});

// 以下、some構文
// 1つでも条件に合致していれば、「true」がreturnで返ってくる
  // 1つずつの条件判定で、1つでもtrueがある必要あり(true || false)
const some = computers.some((computer) => {
  return computer.ram >= 16;
});

// 上記の用途: バリデーションチェックの際に使える
  // ログイン時に、必要な情報が入っているかどうかなど。
    // everyなら、必ず全部入っている場合にのみ、OKとする時
    // someなら、全部入っていなくても、1つでも入っていればOKとする時
console.log(every);
console.log(some);
