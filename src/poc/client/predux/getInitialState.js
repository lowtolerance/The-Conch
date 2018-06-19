import {getVolumeStatus, getPowerStatus, getConfig} from '../utils/utils'

const getInitialState = () => (
  {
    volume: getVolumeStatus(),
    power: getPowerStatus(),
    config: getConfig(),
    ready: false
  }
)

export default getInitialState
