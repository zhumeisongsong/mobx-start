import React from 'react'
import ReactDOM from 'react-dom'
import { observable, autorun, computed } from 'mobx'

import App from './containers/App'
import * as serviceWorker from './serviceWorker'

const peopleStore = observable([
  {name: 'me'}
])

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
      return "<none>"
    } else {
      return `Next todo :"${this.todos[0].task}".
    Progress: ${this.completedTodosCount}/${this.todos.length}`
    }
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    })
  }
}

const observableTodosStore = new ObservableTodoStore()

//TODO: move actions to each method
observableTodosStore.todos.push({task: 'Find', completed: true})
observableTodosStore.todos[0].assignee = peopleStore[0]
peopleStore[0].name = 'me me'

ReactDOM.render(
  <App store={ observableTodosStore } />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
