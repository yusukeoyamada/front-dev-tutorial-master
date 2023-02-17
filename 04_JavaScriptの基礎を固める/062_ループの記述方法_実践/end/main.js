const todos = [
  {
    id: 1,
    title: 'Go to school',
    completed: true
  },
  {
    id: 2,
    title: 'Go to museum',
    completed: true
  },
  {
    id: 3,
    title: 'Go shopping',
    completed: false
  }
]

// 以下のように変更できる
// for(let i = 0; i < todos.length; i++) {
// }
// for(let i in todos) {
// }

for(let todo of todos) {
  if(todo.completed === true) {
    console.log(todo.title);
  }
}
