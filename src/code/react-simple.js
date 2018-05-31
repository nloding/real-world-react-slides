export default `import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'

export default class TodoApp extends React.Component {
  state = { todos: [] }

  propTypes = {
    todos: PropTypes.array.isRequired
  }

  defaultProps = {
    todos: []
  }

  constructor(props) {
    super(props)
  }

  getDerivedStateFromProps(props, state) { /* ... */ }
  shouldComponentUpdate(nextProps, nextState) { /* ... */ }
  componentDidMount() { /* ... */ }
  getSnapshotBeforeUpdate() { /* ... */ }
  componentDidUpdate() { /* ... */ }
  componentWillUnmount() { /* ... */ }

  render() {
    const { todos } = this.state
    return (
      <ul>
        {todos.map(todo => <li><Todo data={todo} /></li>)}
      </ul>
    )
  }
}`
