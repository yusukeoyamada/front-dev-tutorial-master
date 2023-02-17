function createBookShop(inventory) {
  return {
    // 変化(1) 以下が同じ名前の場合は、片方だけ書けば良い
    // 1つに省略できるのは、先頭に持ってくることが多い
    // inventory: inventory,
    inventory,
    // 変化(2) オブジェクトの値が、functionの時は、以下のように「function」を省略できる
    // inventoryValue: function() {
    //   return this.inventory.reduce((total, book) => {
    //     return total + book.price;
    //   }, 0);
    // },
    inventoryValue() {
      return this.inventory.reduce((total, book) => {
        return total + book.price;
      }, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => {
        return book.title === title
      }).price
    }
  }
}

const inventory = [
  { title: 'ハリーポッター', price: 1000 },
  { title: 'js入門', price: 1500 },
]

const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('ハリーポッター'));
