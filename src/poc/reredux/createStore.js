const getInitialState = require('./getInitialState')
const createStore = (reducer) => {
  let store = {}
  store.state = getInitialState()
  store.listeners = []
  store.getState = () => store.state
  store.subscribe = (handler) => store.listeners.push(handler)
  store.dispatch = (action) => {
    store.state = reducer(store.state, action)
    store.listeners.forEach(listener => listener(store))
  }
  store.dispatch({})
  return store
}
module.exports = createStore
