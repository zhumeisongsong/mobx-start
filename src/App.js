import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class App extends Component {
  render() {
    const store = this.props.store
    return (
      <div>
        { store.report }
        <ul>
          {store.todos.map(
            () => <TodoView todo={ todo } key={ idx } />
          )}
        </ul>
      </div>
    )
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
        { todo.assignee
          ? <small>{ todo.assignee.name }</small>
          : null
        }
        <RenderCounter />
      </li>
    )
  }
}

export default App
