// function* colors() {
//   yield 'red';
//   yield 'blue';
//   yield 'green';
// }

// const gen = colors();
// console.log(gen.next()); // {value: 'red', done: false}
// console.log(gen.next()); // {value: 'blue', done: false}
// console.log(gen.next()); // {value: 'green', done: false}
// console.log(gen.next()); // {value: undefined, done: true}

// 上記を以下で再現
  // for_ofは、generatorと相性が良い
// const myColors = []
// for(let color of colors()) {
//   myColors.push(color);
// }
// console.log(myColors); // ['red', 'blue', 'green']

// ----- 上記generator 例(1) 最初の理解 -----

// const engineeringTerm = {
//   size: 3,
//   department: '開発部',
//   lead: '太郎',
//   manager: '花子',
//   engineer: '次郎',
// }

// 今までは、配列やコレクション(配列と同義。javaであれば、List, Mapなど)であれば、順に取り出せた
  // ただ、オブジェクトの場合の場合は、どうだろうか
    // 特定の要素だけ取り出したい場合は、どうすれば良いか
// function* TeamIterator(team) {
//   yield team.lead;
//   yield team.manager;
//   yield team.engineer;
// }

// const names = []
// for(name of TeamIterator(engineeringTerm)) {
//   names.push(name);
// }
// console.log(names); // ['太郎', '花子', '次郎']

// ----- 上記generator 例(2) オブジェクトの中身をgeneratorを使って抽出する場合 -----

const testingTerm = {
  lead: '典子',
  tester: '隆',
}

const engineeringTerm = {
  // 以下はオブジェクトリテラルで省略可能
  // testingTerm: testingTerm,
  testingTerm,
  size: 3,
  department: '開発部',
  lead: '太郎',
  manager: '花子',
  engineer: '次郎',
}

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  // 抽出方法(1) TeamIterator内で抽出する
  // yield team.testingTerm.lead;
  // yield team.testingTerm.tester;

  // 抽出方法(2) 別のgeneratorを呼び、デリゲーション(委譲)する
    // console.log(team.testingTerm); // 出力値: {lead: '典子', tester: '隆'}。つまり、「testingTerm」が入っている
  const testingTermGenerator = TestingTeamIterator(team.testingTerm);
  yield* testingTermGenerator; // 「yield*」の後には、別のgeneratorがくる(その中のyieldを読み取ってくれと)
}

// 抽出方法(2) 別のgeneratorを呼び、デリゲーション(委譲)する
  // イメージ的には、上記「yield* testingTermGenerator;」の時点で、下記に入るイメージ
function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = []
for(name of TeamIterator(engineeringTerm)) {
  names.push(name);
}
console.log(names); // ['太郎', '花子', '次郎', '典子', '隆']

// ----- 上記generator 例(3) 別のgeneratorを使った場合 -----
