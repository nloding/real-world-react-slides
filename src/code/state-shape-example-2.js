export default `// data from api
const data = [ { id: 1, text: 'Todo item 1', completed: false }, { ... }, { ... }, ... ]

// initial state
const initialState = { todos: {}, completedTodos: [], activeTodos: [] }

// reducer
case LOAD_TODOS:
  const todos = action.todos.reduce((acc, todo) => {
    acc[todo.id] = todo
    return acc
  }, {})
  const completedTodos = action.todos.filter(todo => todo.completed).reduce( ... )
  const activeTodos = action.todos.filter(todo => !todo.completed).reduce( ... )
  return { todos, completedTodos, activeTodos }
`
