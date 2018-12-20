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