function startSocketServer (msgPrefix) {
  var io = require('socket.io')()
  io.on('connection', (client) =>
    client.on(msgPrefix, data => 
      console.log(data)
    )
  )
  io.listen(3010)
}

export default startSocketServer
