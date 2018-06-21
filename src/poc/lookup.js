const emitEvent = require('./actions.js')
const delegate = require('./delegate')

// Takes an event (as a string) and sends
// either a string, an array or a function
// to our delegater.

// NOTE: This function is to be considered
// a temporary placeholder for a function that
// will look up the passed in event in a small
// in-memory database and return the result to
// be delegated
function lookup (event, store) {
  switch (event) {
    case 'A90:SONY:12':
      console.log(`'A90:SONY:12' returns 'POWER_TOGGLE'`)
      delegate('POWER_TOGGLE')
      break
    case 'POWER_TOGGLE':
      console.log(`'POWER_TOGGLE' event returns function emitEvent, with payload of '4c3aef'`)
      store.dispatch({type: event})
      delegate(function () { emitEvent('TC', '43ecaf') })
      break
    case 'VOLUME_UP':
      console.log(`VOLUME_UP event returns function emitEvent, with payload '4ea312'`)
      store.dispatch({type: event})
      delegate(function () { emitEvent('TC', '4ea312') })
      break
    case 'VOLUME_DOWN':
      console.log('VOLUME_DOWN event returns function emitEvent')
      store.dispatch({type: event})
      break
    case '43ecaf':
      console.log('Outputting array of commands')
      delegate(['VOLUME_UP', 'hello', 'world'])
      break
    default:
      console.log('Undefined signal ' + event)
      delegate(undefined)
  }
}

module.exports = lookup
