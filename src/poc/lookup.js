const emitEvent = require('./actions.js')

// Takes an event (as a string) and sends
// either a string, an array or a function
// to our delegater.

// NOTE: This function is to be considered
// a temporary placeholder for a function that
// will look up the passed in event in a small
// in-memory database and return the result to
// be delegated
function lookup (event) {
  switch (event) {
    case 'A90:SONY:12':
      console.log(`'A90:SONY:12' returns 'POWER_TOGGLE'`)
      // delegate('POWER_TOGGLE')
      return 'POWER_TOGGLE'
    case 'POWER_TOGGLE':
      console.log(`'POWER_TOGGLE' event returns function emitEvent, with payload of '4c3aef'`)
      store.dispatch({type: event})
      // delegate(function () { emitEvent('TC', '43ecaf') })
      return function () { emitEvent('TC', '43ecaf') }
    case 'VOLUME_UP':
      console.log(`VOLUME_UP event returns function emitEvent, with payload '4ea312'`)
      store.dispatch({type: event})
      // delegate(function () { emitEvent('TC', '4ea312') })
      return function () { emitEvent('TC', '4ea312') }
    case 'VOLUME_DOWN':
      console.log('VOLUME_DOWN event returns function emitEvent')
      store.dispatch({type: event})
      return
    case '43ecaf':
      console.log('Outputting array of commands')
      // delegate(['VOLUME_UP', 'hello', 'world'])
      return ['VOLUME_UP', 'hello', 'world']
    default:
      console.log('Undefined signal ' + event)
      // delegate(undefined)
      return undefined
  }
}

module.exports = lookup
