// (1)オブジェクトの定義方法
// 下記は、「const person = new Object()」とも
// const person = {}
// person.name = 'Code Mafia';
// 上記「.name」は、プロパティという

// (2)オブジェクトの定義方法
// 下記{}は、オブジェクトリテラルという
// const person = {name: 'Code Mafia'}
// 上記「name:」は、key、「'Code Mafia'」は、value

// 色んなデータ型を入れることができる
const person = {
  name: ['Code', 'Mafia'],
  age: 32,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'piano'
  },
  getFullName: function() {
    // ここでのthisは宣言された際のオブジェクト(person)を指す
    console.log(this.name[0] + this.name[1])
  }
};

// 「person[ageKey]」のように、値を表示させることを、ブラケット記法という
const ageKey = 'age';
person[ageKey] = 12; // constでも、値の変更はできる(「const person = {}」はできない)

// 「person.age」のように、値を表示させることを、ドット記法という
console.log(person.age);

person.getFullName();
