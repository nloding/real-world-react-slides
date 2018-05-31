export default `// without reshaping state
const updatedTodos = todos.map(todo => todo.id == id ? { ...todo, completed: true } : todo);
this.setState({ todos: updatedTodos });

// with normalized state
this.setState({ [todo.id]: { ...todo, completed: true } })

// which do you prefer? which is more preformant?
`
