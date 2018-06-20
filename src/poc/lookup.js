const emitEvent = require('./actions.js')
const dispatch = require('./dispatch')

// Takes an event (as a string) and sends
// either a string, an array or a function
// to our dispatcher.

// NOTE: This function is to be considered
// a temporary placeholder for a function that
// will look up the passed in event in a small
// in-memory database and return the result to
// be dispatched
function lookup (event) {
  switch (event) {
    case 'A90:SONY:12':
      console.log(`'A90:SONY:12' returns 'POWER_TOGGLE'`)
      dispatch('POWER_TOGGLE')
      break
    case 'POWER_TOGGLE':
      console.log(`'POWER_TOGGLE' event returns function emitEvent, with payload of '4c3aef'`)
      dispatch(function () { emitEvent('TC', '43ecaf') })
      break
    case 'VOLUME_UP':
      console.log(`VOLUME_UP event returns function emitEvent, with payload '4ea312'`)
      dispatch(function () { emitEvent('TC', '4ea312') })
      break
    case '43ecaf':
      console.log('Outputting array of commands')
      dispatch(['VOLUME_UP', 'hello', 'world'])
      break
    default:
      console.log('Undefined signal ' + event)
      dispatch(undefined)
  }
}

module.exports = lookup
