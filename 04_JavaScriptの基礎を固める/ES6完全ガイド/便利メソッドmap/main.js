let numbers = [1, 2, 3]

// この変数を何故新たに作らないといけないのか
let doubleNumbers = [];

for(let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

// forEachとの違いは、以下
  // forEachは、for文と同じで、より簡略化したものだが、用途が複数ある
  // mapは、return値を新しい配列に1つずつ入れている(結果: [2, 4, 6])
    // numbers配列の中身を変更していない。
      // 用途: 元の配列の中身を変更せずに、新しい配列を作る
        // 元データを参考にして、必要なデータだけ抽出する際に使える(データの整形)
          // usersの情報から、必要な情報だけ抽出して、まとめた配列を使ってページを作る
let doubled = numbers.map((number) => {
  // returnは必須
  return number * 2;
});

console.log(doubled);
console.log(doubleNumbers);
