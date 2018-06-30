const getInitialState = require('./getInitialState')
const tvReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case 'READY':
      return {...state, ready: true}
    case 'POWER_TOGGLE':
      return {...state, power: !state.power}
    case 'VOLUME_UP':
      if (state.volume < state.config.maxVolume) {
        return {...state, volume: state.volume + 1}
      } else return state
    case 'VOLUME_DOWN':
      if (state.volume > 0) {
        return {...state, volume: state.volume - 1}
      } else return state
    default:
      return state
  }
}
module.exports = tvReducer
