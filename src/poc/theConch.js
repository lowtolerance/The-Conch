const enqueue = require('./utils/enqueue')
const dequeue = require('./utils/dequeue')
const lookup = require('./lookup')

function runout () {
  while (this.eventQueue.length !== 0) {
    const event = dequeue()
    lookup(event)
  }
  console.timeEnd()
}

function theConch (openSocket) {
  global.eventQueue = []
  openSocket.on('connect', connected => {
    connected.on('TC', data => {
      console.time()
      console.log(`Caught signal '${data}'`)
      enqueue(data)
      runout()
    })
  })
}

module.exports = theConch
