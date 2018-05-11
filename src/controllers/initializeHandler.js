import map from './dbMapUtils'
const io = require('socket.io')(3010)

const listener = {
  name: 'IR Event Receiver',
  handles: 'infrared',
  handler: {
    initializer: initSocket,
    prefix: 'IR'
  }
}

function initSocket () {
  io.on('connect', connected => {
    connected.emit('tc', 'connected')
    connected.on('IR', data => {
      console.log(map(data))
      connected.volatile.emit('tc', map(data))
    })
  })
}

function initializeHandler (rule) {
  if (listener.handles === rule.input.protocol) {
    console.log(`Starting ${listener.name} listener to satisfy rule '${rule.name}'`)
    listener.handler.initializer(listener.handler.prefix)
  } else {
    console.log(`No valid handler found for protocol '${rule.input.protocol}'`)
  }
}

export default initializeHandler
