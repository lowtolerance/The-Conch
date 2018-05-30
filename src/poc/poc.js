const io = require('socket.io')(3015)
const TheConch = require('./theConch.js')

const tC = new TheConch(io)
