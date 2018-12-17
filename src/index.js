import React from 'react'
import ReactDOM from 'react-dom'
import { observable } from 'mobx'

import App from './App'
import * as serviceWorker from './serviceWorker'

class ObservableTodoStore {
  @observable todos = []
  @observable pendingRequests = 0

  constructor() {
    mobx.autorun(()=>console.log(this.report))
  }

}

ReactDOM.render(
  <App store={ observableTodoStore } />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
