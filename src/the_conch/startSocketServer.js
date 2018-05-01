import map from '../the_conch/dbMapUtils'

function startSocketServer (msgPrefix) {
  const io = require('socket.io')()
  io.on('connect', client =>
    client.on(msgPrefix, function (data) {
      const mappedIO = map(data)
      io.emit('tcMessage', `outputs '${mappedIO}'`)
      io.emit('IR_', mappedIO)
    })
  )
  io.listen(3010)
}

export default startSocketServer
