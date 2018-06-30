const enqueue = require('./utils/enqueue')
const dequeue = require('./utils/dequeue')
const lookup = require('./lookup')
const power = require('./utils/power')
const createStore = require('./reredux/createStore.js')
const tvReducer = require('./reredux/tvReducer.js')
const serverStore = createStore(tvReducer)

serverStore.subscribe((store) => {
  console.log(store.getState())
  if (global.socket) {
    global.socket.emit('restate', store.getState())
  }
})
serverStore.subscribe((store) => {
  if (store.getState().power !== power.getStatus()) power.toggle()
})

// Main

// Takes socket.io socket as input,
// which it probably shouldn't.
// socket logic in general is likely
// a mess and is almost certain to change
// drastically.
function theConch (openSocket) {
  global.eventQueue = []
  openSocket.on('connect', connected => {
    global.socket = connected
    serverStore.dispatch({type: 'READY'})
    connected.on('TC', data => {
      console.time()
      enqueue(data)
      while (this.eventQueue.length !== 0) {
        const event = dequeue()
        lookup(event)
      }
      console.timeEnd()
    })
  })
}

module.exports = theConch
