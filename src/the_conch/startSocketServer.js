import commandTable from '../the_ocean/commandTable'

const mapI2U = (data) => {
  return commandTable.input(data).commandString
}

const mapU2O = (data) => {
  return commandTable.output(data).commandString
}

const mapI2O = (data) => {
  return mapU2O(mapI2U(data))
}
function startSocketServer (msgPrefix) {
  var io = require('socket.io')()
  io.on('connect', client =>
    client.on(msgPrefix, function (data) {
      const mappedIO = mapU2O(data))
      io.emit('tcMessage', `The Conch has received a message, '${data}', which according to your rules, means it should output '${mappedIO}'`)
      io.emit('IR_', mappedIO)
    })
  )
  io.listen(3010)
}

export default startSocketServer
