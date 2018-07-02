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
const port = 3000
http.listen(port, function () {
  console.log(`Listening on *:${port}`)
})

module.exports = app
