import React from 'react'
import ReactDOM from 'react-dom'
import { observable, autorun, computed } from 'mobx'

import App from './App'
import * as serviceWorker from './serviceWorker'

class ObservableTodoStore {
  // Make objects trackable for MobX
  @observable todos = []
  @observable pendingRequests = 0

  constructor() {
    // Automatically run functions that depend on some observable state
    autorun(() => console.log(this.report))
  }

  // The computations are decorated with @computed to identify that
  // these can be derived from the state
  @computed get completedTodosCount() {
    return this.todos.filter(
      todo => todo.completed === true
    ).length;
  }

  @computed get report() {
    if (this.todos.length === 0) {
      console.log(this.todos)
      return "<none>"
    } else {
      return `Next todo :"${this.todos[0].task}".
    Progress: ${this.completedTodosCount}/${this.todos.length}`
    }
  }

  addTodos(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    })
  }
}

const observableTodosStore = new ObservableTodoStore()

// Action
observableTodosStore.todos.push({task: 'Find', completed: true})
setTimeout(() => {
  observableTodosStore.todos[0].completed = false
}, 500)

ReactDOM.render(
  <App store={ observableTodosStore } />,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
