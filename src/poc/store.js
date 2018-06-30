const power = require('./utils/power')
const createStore = require('./reredux/createStore.js')
const tvReducer = require('./reredux/tvReducer')
const store = createStore(tvReducer)

store.subscribe(() => {
  console.log(store.getState())
  if (global.socket) {
    global.socket.emit('restate', store.getState())
  } else console.log('No open socket available!')
})

store.subscribe(() => {
  if (store.getState().power !== power.getStatus()) power.toggle()
})

module.exports = store
