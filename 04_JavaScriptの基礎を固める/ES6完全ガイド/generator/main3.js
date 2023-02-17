// const testingTerm = {
//   lead: '典子',
//   tester: '隆',
//   // 動的なプロパティについての理解は、以下
//   [Symbol.iterator]: function* () {
//     yield this.lead;
//     yield this.tester;
//   },
// }

// const hage = {
//   key: 'value',
//   // 動的なプロパティ(1 + 2 = 3になる)
//   [1 + 2]: 'three',
// }
// console.log(hage); // {3: 'three', key: 'value'}

// const engineeringTerm = {
//   // 以下はオブジェクトリテラルで省略可能
//   // testingTerm: testingTerm,
//   testingTerm,
//   size: 3,
//   department: '開発部',
//   lead: '太郎',
//   manager: '花子',
//   engineer: '次郎',
// }

// function* TeamIterator(team) {
//   yield team.lead;
//   yield team.manager;
//   yield team.engineer;

//   // 「testingTerm」に、直接gereratorを入れたことにより、以下は不要に
//   // const testingTermGenerator = TestingTeamIterator(team.testingTerm);
//   // yield* testingTermGenerator;

//   // 「[Symbol.iterator]」のキーがあるかどうか、探しに行く
//     // 見つけたら、yieldごとに、valueを取ってくる。
//   yield* team.testingTerm;
// }

// 「testingTerm」に、直接gereratorを入れたことにより、以下は不要に
  // function* TestingTeamIterator(team) {
  //   yield team.lead;
  //   yield team.tester;
  // }

// const names = []
// for(name of TeamIterator(engineeringTerm)) {
//   names.push(name);
// }
// console.log(names); // ['太郎', '花子', '次郎', '典子', '隆']

// ----- 上記generator 例(4) 「main2.js」の例(3)をより簡略化したもの -----

const testingTerm = {
  lead: '典子',
  tester: '隆',

  // Stringのprototypeを見てみると、以下のように格納されている
    // Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
      // なので、ここでも同様に格納する必要があると思われる。
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  },
}

const engineeringTerm = {
  testingTerm,
  size: 3,
  department: '開発部',
  lead: '太郎',
  manager: '花子',
  engineer: '次郎',

  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTerm;
  },
}

// 「engineeringTerm」に、直接gereratorを入れたことにより、以下は不要に
  // function* TeamIterator(team) {
  //   yield team.lead;
  //   yield team.manager;
  //   yield team.engineer;
  //   yield* team.testingTerm;
  // }

// for_ofは、「engineeringTerm」の中の「[Symbol.iterator]」というキーがあるかどうかを見て
  // あったら、その中身のgereratorから、valueを取ってくる
    // (注意) 元々、for_ofは、配列で使うものだった。
      // それでも機能しているのは、配列の中に、元々[Symbol.iterator]があるから。
const names = []
for(name of engineeringTerm) {
  names.push(name);
}
console.log(names); // ['太郎', '花子', '次郎', '典子', '隆']

// 「engineeringTerm」に、直接gereratorを入れたことにより、以下「TeamIterator(engineeringTerm)」の書き方が変更に
  // const names = []
  // for(name of TeamIterator(engineeringTerm)) {
  //   names.push(name);
  // }
  // console.log(names); // ['太郎', '花子', '次郎', '典子', '隆']

// ----- 上記generator 例(5) 例(4)をより、簡略化したもの -----
