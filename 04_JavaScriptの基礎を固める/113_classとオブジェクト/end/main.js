const obj = {
  first_name: 'Mafia',
  last_name: 'Code',
  printFullName: function() {
      console.log('hello');
  }
}

class MyObj {
  constructor() {
    this.first_name = 'Mafia';
    this.last_name = 'Code';
  }

  // クラスの中で、関数を定義する際には、以下のようにfunctionを加える必要はない。
  // printFullName: function() {
  //   console.log('hello');
  // }
  printFullName() {
    console.log('hello');
  }
}

obj.printFullName();

const obj2 = new MyObj();
// 呼び出し方が上記と同じなので、classはオブジェクトと言える
obj2.printFullName();
// 上記を丁寧に書くと以下(「__proto__」とは、ブラウザが独自に設定しているプロパティ)
// 省略可能
// obj2.__proto__.printFullName();
console.log(obj2);
