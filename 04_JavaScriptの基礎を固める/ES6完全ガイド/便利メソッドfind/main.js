let users = [
  { name: '太郎' },
  { name: '次郎' },
  { name: '三郎' },
]

// この変数を何故新たに作らないといけないのか
let user;

for(let i = 0; i < users.length; i++) {
  if(users[i].name === '太郎') {
    user = users[i];
    break;
  }
}

// filterとの違いは、以下
  // filterは、return値を新しい配列に1つずつ入れている
    // 用途: 元の配列の中身を変更せずに、特定の条件を満たした要素が格納されている、新しい配列を作る
  // findは、条件に一致した要素をreturnしている。
    // 加えて、条件に一致した1番最初の要素をreturnしているので、見つかって以降はbreakしている。
      // users配列の中身を変更していない。
        // 用途: 元の配列の中身を変更せずに、特定の条件を満たした要素を1つだけ抽出する。
          // ブログの詳細ページなど、IDが振られているページの抽出などに使えるかも
const finded = users.find((user) => {
  return user.name === '太郎'
});

console.log(user);
console.log(users);
console.log(finded);
