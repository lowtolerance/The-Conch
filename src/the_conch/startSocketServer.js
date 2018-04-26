import commandTable from '../the_ocean/commandTable'

function startSocketServer (msgPrefix) {
  var io = require('socket.io')()
  io.on('connect', client =>
    client.on(msgPrefix, function (data) {
      const inputMappedToOutput = commandTable.output(commandTable.input(data))
      console.log(`The Conch has received a message, '${data}', which according to your rules, means it should output '${inputMappedToOutput}'`)
      io.emit('IR_', inputMappedToOutput)
    })
  )
  io.listen(3010)
}

export default startSocketServer
