const io = require('socket.io-client')
const socket = io('http://localhost:3000')

const _POWER_TOGGLE = '43ecaf'

socket.on('connect', function () {
  socket.emit('TC', _POWER_TOGGLE)
})

socket.on('TC', function (data) {
  console.log(data)
})
