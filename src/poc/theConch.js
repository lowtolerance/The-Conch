const enqueue = require('./utils/enqueue')
const dequeue = require('./utils/dequeue')
const lookup = require('./lookup')

// Iterate through our event queue until no events
// remain. Susceptible to being replaced by a
// different strategy if the need arises.

function runout () {
  while (this.eventQueue.length !== 0) {
    const event = dequeue() // Get event
    lookup(event) // Act accordingly
  }
  console.timeEnd() // end timer. prints time from start to finish upon receiving an event.
}

// Takes socket.io socket as input,
// which it probably shouldn't.
// socket logic in general is likely
// a mess and is certain to change
// drastically

function theConch (openSocket) {
  global.eventQueue = [] // Init queue
  openSocket.on('connect', connected => {
    connected.on('TC', data => {
      connected.emit('READY')
      console.time() // Start timer
      console.log(`Caught signal '${data}'`)
      enqueue(data) // Add socket message payload to event queue
      runout() // Run out our queue.
    })
  })
}

module.exports = theConch
