import config from '../config'
export const integerPercentage = (val, max) => Math.round(val * (100 / max))
export const volumePercentage = (vol, max) => ('volume-' + integerPercentage(vol, max))
export const getVolumeStatus = () => 0
export const getPowerStatus = () => false
export const getConfig = () => config
