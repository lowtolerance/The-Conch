import getInitialState from './getInitialState'
import * as actors from '../actors/*.js'

const handlers = []
for (let actor in actors) { handlers.push(actors[actor]) }

const createStore = (reducer) => {
  const store = {}
  store.state = getInitialState()
  store.handlers = handlers || []
  store.getState = () => store.state
  store.restate = (newState) => {
    store.state = newState
    store.handlers.forEach(listener => listener(store))
  }
  store.subscribe = (actor) => store.handlers.push(actor)
  // store.dispatch = (action) => {
  // store.state = reducer(store.state, action)
  //  store.handlers.forEach(listener => listener(store))
  // }
  // store.dispatch({})
  return store
}

export default createStore
