import socketIO from 'socket.io'
import map from './dbMapUtils'

function initSocketNamespaces (msgPrefix, io) {
  io.on('connect', client =>
    client.on(msgPrefix, function (data) {
      const mappedIO = map(data)
      io.emit('tcMessage', `outputs '${mappedIO}'`)
      io.emit('IR_', mappedIO)
    })
  )
}

export default initSocketNamespaces
