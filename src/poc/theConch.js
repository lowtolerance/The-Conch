const emitEvent = require('./actions.js')

class TheConch {
  constructor (openSocket) {
    this.eventQueue = []
    openSocket.on('connect', connected => {
      connected.on('IR', data => {
        console.time()
        console.log(`Caught signal '${data}'`)
        this.enqueue(data)
        this.runout()
      })
    })
  }

  enqueue (data) {
    if (typeof data === 'object') {
      for (let item in data) {
        this.eventQueue.push(data[item])
      }
    } else this.eventQueue.push(data)
  }

  dequeue () {
    return this.eventQueue.shift()
  }

  peek () {
    return this.eventQueue[0]
  }

  lookup (event) {
    switch (event) {
      case 'A90:SONY:12':
        console.log(`'A90:SONY:12' returns 'POWER_TOGGLE'`)
        this.dispatch('POWER_TOGGLE')
        break
      case 'POWER_TOGGLE':
        console.log(`'POWER_TOGGLE' event returns function emitEvent, with payload of '4c3aef'`)
        this.dispatch(function () { emitEvent('IR', '43ecaf') })
        break
      case 'VOLUME_UP':
        console.log(`VOLUME_UP event returns function emitEvent, with payload '4ea312'`)
        this.dispatch(function () { emitEvent('IR', '4ea312') })
        break
      case '43ecaf':
        console.log('Outputting array of commands')
        this.dispatch(['VOLUME_UP', 'hello', 'world'])
        break
      default:
        console.log('Undefined signal ' + event)
        this.dispatch(undefined)
    }
  }

  dispatch (result) {
    switch (typeof result) {
      case 'string':
        console.log(`Adding event '${result}' to queue`)
        this.enqueue(result)
        break
      case 'function':
        console.log(`Performing action '${result}'`)
        result()
        break
      case 'object':
        console.log('')
        this.enqueue(result)
        break
      default:
        console.log('Doing nothing with ' + typeof result)
        break
    }
  }

  runout () {
    while (this.eventQueue.length !== 0) {
      const event = this.dequeue()
      this.lookup(event)
    }
    console.timeEnd()
  }
}

module.exports = TheConch
