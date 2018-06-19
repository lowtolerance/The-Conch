const emitEvent = require('./actions.js')
const dispatch = require('./dispatch')

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
