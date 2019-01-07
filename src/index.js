import React from 'react'
import ReactDOM from 'react-dom'

import TodoList from './containers/TodoList'
import * as serviceWorker from './serviceWorker'
import {peopleStore, observableTodosStore} from './store'

// TODO: move actions to each method
// observableTodosStore.todos[0].assignee = peopleStore[0]
// peopleStore[0].name = 'me me'

ReactDOM.render(
  <TodoList store={ observableTodosStore } />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
