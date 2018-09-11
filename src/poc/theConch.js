const enqueue = require('./utils/enqueue')
const dequeue = require('./utils/dequeue')
const lookup = require('./lookup')
const delegate = require('./delegate')
const store = require('./store')

// Takes socket.io socket as input,
// which it probably shouldn't.
// socket logic in general is likely
// a mess and is almost certain to change
// drastically.
function theConch (openSocket) {
  global.eventQueue = []
  openSocket.on('connect', connected => {
    global.socket = connected
    store.dispatch({type: 'READY'})
    connected.on('TC', data => {
      console.time()
      enqueue(data)
      while (this.eventQueue.length !== 0) {
        const event = dequeue()
        const action = lookup(event)
        delegate(action)
      }
      console.timeEnd()
    })
  })
  openSocket.on('disconnnect', reason => {
    console.log(`disconnected: ${reason}`)
    delete global.socket
  })
}

module.exports = theConch
