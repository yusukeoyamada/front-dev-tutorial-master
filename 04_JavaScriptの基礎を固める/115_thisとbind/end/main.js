const obj = {
  first_name: 'Mafia',
  last_name: 'Code',
  printFullName: function() {
    console.log(this);

    // (1) window内のthisを「obj」する為の方法
    const _that = this;
    window.setTimeout(function() {
      console.log(_that);
    });

    // (2) window内のthisを「obj」する為の方法
    window.setTimeout(function() {
      console.log(this);
    }.bind(this));

    // bindの引数は、オブジェクトであれば何でも良いので以下のような感じでも良い
    window.setTimeout(function() {
      console.log(this);
    }.bind(
      { first_name: 'Taro' }
    ));
  }
}

obj.printFullName();
