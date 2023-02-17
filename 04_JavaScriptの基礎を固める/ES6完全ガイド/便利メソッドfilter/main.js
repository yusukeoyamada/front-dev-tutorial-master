let products = [
  { name: 'きゅうり', type: '野菜' },
  { name: 'バナナ', type: 'フルーツ' },
]

// この変数を何故新たに作らないといけないのか
let filteredProducts = [];

for(let i = 0; i < products.length; i++) {
  if(products[i].type === 'フルーツ') {
    filteredProducts.push(products[i]);
  }
}

// forEach, mapとの違いは、以下
  // forEachは、for文と同じで、より簡略化したものだが、用途が複数ある
  // mapは、「元の配列の中身を変更せずに、新しい配列を作る」のは同じだが、条件指定はない。
  // filterは、return値を新しい配列に1つずつ入れている
    // products配列の中身を変更していない。
      // 用途: 元の配列の中身を変更せずに、特定の条件を満たした要素が格納されている、新しい配列を作る
        // 特定のブログ記事(id: 2)に紐づいているコメントを抽出する際に使えるかも
const filtered = products.filter((product) => {
  return product.type === 'フルーツ'
});

console.log(filteredProducts);
console.log(filtered);
