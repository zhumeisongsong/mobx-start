import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TodoView from '../components/TodoView'

// Make your React components truly reactive
@observer
class TodoList extends Component {
  render() {
    const store = this.props.store

    return (
      <div>
        { store.report }
        <ul>
          {store.todos.map(
            (todo, index) => <TodoView todo={ todo } key={ index } />
          )}
        </ul>
        { store.pendingRequests > 0 ? <marqee>Loading </marqee> : null}
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small>(double-click a todo to edit)</small>
      </div>
    )
  }

  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:', 'coffee piz'))
  }
}

export default TodoList