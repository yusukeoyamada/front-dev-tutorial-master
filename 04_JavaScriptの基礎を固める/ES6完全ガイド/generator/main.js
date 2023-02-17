// 普通の関数は、returnして終わり
// function shopping() {
// }

// generatorの場合、return後に、returnしたところから、また進行することができる
  // 「*」をつけると、generatorになる
    // 以下がポイント
      // generatorから出る時は、引数か何かを持って、出ることができる。
      // generatorに戻る時は、引数か何かを持って、戻ることができる。
function* shopping() {
  // 1. 歩道
  // 2. 歩道を歩いて、お店に行く
  // 3. お店に到着したので、お金を持ってお店に入る
    // 5. 日用品を買って、お店から戻ってきた
  const stuffFromStore = yield 'お金';

  // 6. コインランドリーに到着したので、服を持って入る
    // 8. 綺麗な服を持って、コインランドリーから戻ってきた
  const cleanClothes = yield '汚れた服';

  // 9. 家に歩いて帰る
    // 「stuffFromStore」の中には、「'日用品'」が入っている
    // 「cleanClothes」の中には、「'綺麗な服'」が入っている
  return [stuffFromStore, cleanClothes];
}

const gen = shopping();
console.log(gen.next());         // 「1. 歩道」のところに行く()

// 4. お店の中の世界

console.log(gen.next('日用品'));  // 「5. 日用品を買って、お店から戻ってきた」のところに行く()

// 7. コインランドリーの中の世界

console.log(gen.next('綺麗な服'));  // 「8. 綺麗な服を持って、コインランドリーから戻ってきた」のところに行く()
