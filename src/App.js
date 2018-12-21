import React, { Component } from 'react'
import { observer } from 'mobx-react'

// Make your React components truly reactive
@observer
class App extends Component {
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

@observer
class TodoView extends Component {
  render() {
    const todo = this.props.todo;
    return (
      <li onDoubleClick={ this.onRename }>
        <input
          type='checkbox'
          checked={ todo.completed }
          onChange={ this.onToggleCompleted }
        />
        { todo.task }
        {console.log(todo)}
        { todo.assignee
          ? <small>{ todo.assignee.name }</small>
          : null
        }
        {/*<RenderCounter />*/}
      </li>
    )
  }

  onToggleCompleted = () => {
    const todo = this.props.todo
    todo.completed = !todo.completed
  }

  onRename = () => {
    const todo = this.props.todo
    todo.task = prompt('Take name', todo.task) || todo.task
  }
}

export default App