const io = require('socket.io')(3015)
let eventQueue = []

function enqueue (data) {
  eventQueue.push(data)
}

function dequeue () {
  return eventQueue.shift()
}

function lookup (event) {
  switch (event) {
    case 'A90:SONY:12':
      console.log(`Event ${event} returns 'POWER_TOGGLE'`)
      dispatch('POWER_TOGGLE')
      break
    case 'POWER_TOGGLE':
      console.log(`'POWER_TOGGLE' event returns function irEmit, with payload of '4c3aef'`)
      dispatch(function () { irEmit('4c3aef') })
      break
    default:
      console.log('No operation necessary')
      dispatch(undefined)
  }
}

function loop () {
  while (eventQueue.length !== 0) {
    const event = dequeue()
    lookup(event)
  }
}

function init () {
  io.on('connect', connected => {
    connected.on('IR', data => {
      console.log(`Caught signal '${data}'`)
      enqueue(data)
      loop()
    })
  })
}

init()

function dispatch (result) {
  switch (typeof result) {
    case 'string':
      console.log(`Adding event '${result}' to queue`)
      enqueue(result)
      break
    case 'function':
      console.log(`Performing action '${result}'`)
      result()
      break
    case 'array':
      console.log('')
      for (let item in result) {
        enqueue(result[item])
      }
      break
    default:
      console.log('No operation')
      break
  }
}

function irEmit (data) {
  io.on('connect', connected => {
    console.log(data)
    connected.volatile.emit('IR', data)
  })
}
