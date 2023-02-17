const obj = {
  first_name: 'Mafia',
  last_name: 'Code',
  printFullName: function() {
    // thisは、オブジェクトを参照するキーワード
    // thisの部分を「obj」にしても良い
      // 「obj」が既に生成されているから
    console.log(this.first_name);

    window.setTimeout(function() {
      // ここでは、windowを指す。
      // thisは直近のオブジェクトを指す為。
      console.log(this);
    });

    // 以下は上記をより正確に表現したもの
    // const fn = function() {
    //   console.log(this);
    // };
    // window.setTimeout(fn);
  }
}

// 以下は既に定義されているが、構造を理解する為に、定義した(上記「obj」で使用する)
// const window = {
//   setTimeout: function(fn) {
//     fn();
//   }
// }

class MyObj {
  constructor() {
    this.first_name = 'Mafia';
    this.last_name = 'Code';
  }

  printFullName() {
    // thisの部分を「MyObj」にしても認識されない
      // classはnewした時点で、オブジェクトが生成されるから
    console.log(this.first_name);

    window.setTimeout(function() {
      // ここでは、windowを指す。
      // thisは直近のオブジェクトを指す為。
      console.log(this);
    });

    // 以下は上記をより正確に表現したもの
    // const fn = function() {
    //   console.log(this);
    // };
    // window.setTimeout(fn)
  }
}

// 以下は既に定義されているが、構造を理解する為に、定義した(上記「MyObj」で使用する)
// const window = {
//   setTimeout: function(fn) {
//     fn(); // ここは、「console.log(this);」と同義。
//   }
// }

const obj2 = new MyObj();

obj.printFullName();
obj2.printFullName();
