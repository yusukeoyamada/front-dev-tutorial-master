class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  // classなので、以下のようには定義しない
    // [Symbol.iterator]: function* () {
    // }
  // 普通の関数は、以下のように書く
    // method() {
    // }
  *[Symbol.iterator]() {
    yield this.content;
    // (注意) map, forEachは使えない
    for(let child of this.children) {
      // ここで、子供の「*[Symbol.iterator]」を見に行き、その中の処理を順に追っていく
        // (ここが凄い) そうすることで、子供の、そのまた子供がいたとしても、その子供の「this.content」を取ってきてくれる。
      yield* child;
    }
  }
}

// 以下のように、子供の子供のコメントなども抽出できる
  // const children2 = [
  //   new Comment('上手く言えない', []),
  // ]
  // const children3 = [
  //   new Comment('どうとでも言える', []),
  // ]
  // const children = [
  //   new Comment('賛成', children2),
  //   new Comment('反対', []),
  //   new Comment('普通', children3),
  // ]
const children = [
  new Comment('賛成', []),
  new Comment('反対', []),
  new Comment('普通', []),
]

// 「非常に良い記事です」コメントに、childrenで格納したコメントが付いているイメージ
const tree = new Comment(
  '非常に良い記事です',
  children,
);
console.log(tree);
// Comment {content: '非常に良い記事です', children: Array(3)}
//   children: Array(3)
//     0: Comment {content: '賛成', children: Array(0)}
//     1: Comment {content: '反対', children: Array(0)}
//     2: Comment {content: '普通', children: Array(0)}

const values = [];
for(let value of tree) {
  values.push(value);
}
console.log(values); // ['非常に良い記事です', '賛成', '反対', '普通']
                     // 子供の子供のコメントがある場合: ['非常に良い記事です', '賛成', '上手く言えない', '反対', '普通', 'どうとでも言える']
