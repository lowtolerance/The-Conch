
const io = require('socket.io-client')
const socket = io('http://localhost:3015')

const _POWER_TOGGLE = '43ecaf'

socket.on('connect', function () {
  socket.emit('IR', _POWER_TOGGLE)
})
