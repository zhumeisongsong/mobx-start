import { observable, autorun, computed } from 'mobx'

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

export const observableTodosStore = new ObservableTodoStore()


export const peopleStore = observable([
  {name: 'me'}
])
