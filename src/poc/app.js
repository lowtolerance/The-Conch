const path = require('path')
const express = require('express')
const app = express()
const http = require('http').Server(app)

const io = require('socket.io')(http)
const theConch = require('./theConch.js')

theConch(io)

var indexRouter = require('./routes/index')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
http.listen(3000, function () {
  console.log('listening on *:3000')
})

io.on('connection', function (socket) {
  socket.on('IR', function (data) {
    console.log(data)
  })
})
module.exports = app
