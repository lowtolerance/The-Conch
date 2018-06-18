const client = require('socket.io')()

function emitEvent (protocol, data) {
  console.log(`  Protocol: ${protocol} 
  Data: ${data}`)
  client.emit(protocol, data)
}

module.exports = emitEvent
