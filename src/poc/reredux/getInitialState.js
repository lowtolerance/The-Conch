const power = require('../utils/power')
const config = {
  maxVolume: 12
}
const getVolumeStatus = () => 0
const getConfig = () => config
const getInitialState = () => (
  {
    volume: getVolumeStatus(),
    power: power.getStatus(),
    config: getConfig(),
    ready: false
  }
)
module.exports = getInitialState
