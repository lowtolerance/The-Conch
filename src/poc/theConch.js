const enqueue = require('./utils/enqueue')
const dequeue = require('./utils/dequeue')
const lookup = require('./lookup')

// Takes socket.io socket as input,
// which it probably shouldn't.
// socket logic in general is likely
// a mess and is certain to change
// drastically

function theConch (openSocket) {
  global.eventQueue = []
  openSocket.on('connect', connected => {
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
